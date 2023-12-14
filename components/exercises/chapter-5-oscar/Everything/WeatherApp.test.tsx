import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import WeatherApp from './WeatherApp';

jest.mock('axios');

describe('WeatherApp', () => {
  test('renders the WeatherApp component', () => {
    render(<WeatherApp />);
    expect(screen.getByPlaceholderText('Enter location')).toBeInTheDocument();
  });

  test('fetches weather data when Enter key is pressed', async () => {
    const mockData = {
      name: 'London',
      main: {
        temp: 20,
        temp_min: 15,
        temp_max: 25,
        feels_like: 18,
      },
      weather: [{ description: 'Cloudy' }],
      wind: {
        speed: 10,
      },
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<WeatherApp />);
    const input = screen.getByPlaceholderText('Enter location');
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText('London')).toBeInTheDocument();
      expect(screen.getByText('20 ºC')).toBeInTheDocument();
      expect(screen.getByText('feels 18 ºC')).toBeInTheDocument();
      expect(screen.getByText('min 15 ºC')).toBeInTheDocument();
      expect(screen.getByText('max 25 ºC')).toBeInTheDocument();
      expect(screen.getByText('Cloudy')).toBeInTheDocument();
      expect(screen.getByText('10 MPH')).toBeInTheDocument();
    });
  });

  test('displays error message when location is not found', async () => {
    axios.get.mockRejectedValueOnce({ response: { status: 404 } });

    render(<WeatherApp />);
    const input = screen.getByPlaceholderText('Enter location');
    fireEvent.change(input, { target: { value: 'Invalid Location' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => {
      expect(screen.getByText('Location not found.')).toBeInTheDocument();
    });
  });

  test('displays error message when an error occurs', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'));

    render(<WeatherApp />);
    const input = screen.getByPlaceholderText('Enter location');
    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });

    await waitFor(() => {
      expect(
        screen.getByText('An error occurred. Please try again later.')
      ).toBeInTheDocument();
    });
  });
});
