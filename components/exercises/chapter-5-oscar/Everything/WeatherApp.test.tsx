import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import WeatherApp from './WeatherApp';

jest.mock('axios');

describe('WeatherApp', () => {
  it('renders the component', () => {
    render(<WeatherApp />);
    const inputElement = screen.getByPlaceholderText('Enter location');
    expect(inputElement).toBeInTheDocument();
  });

  it('fetches weather data and displays it', async () => {
    const mockData = {
      data: {
        name: 'SampleCity',
        main: {
          temp: 22,
          temp_min: 20,
          temp_max: 25,
          feels_like: 23,
          humidity: 50,
          pressure: '1013 hPa',
        },
        weather: [{ description: 'Clear sky' }],
        wind: { speed: 5 },
      },
    };

    jest.spyOn(axios, 'get').mockResolvedValue(mockData);

    render(<WeatherApp />);

    const inputElement = screen.getByPlaceholderText('Enter location');
    fireEvent.change(inputElement, { target: { value: 'SampleCity' } });

    const formElement = screen.getByTestId('weather-form');
    fireEvent.submit(formElement);

    // Wait for the component to update with the fetched data
    await waitFor(() => {
      const cityName = screen.getByText('SampleCity');
      expect(cityName).toBeInTheDocument();
    });
    await waitFor(() => {
      const temperature = screen.getByText('22 ºC');
      expect(temperature).toBeInTheDocument();
    });
    await waitFor(() => {
      const weatherDescription = screen.getByText('Clear sky');
      expect(weatherDescription).toBeInTheDocument();
    });
  });

  it('handles location not found error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({ response: { status: 404 } });

    render(<WeatherApp />);

    const inputElement = screen.getByPlaceholderText('Enter location');
    fireEvent.change(inputElement, { target: { value: 'NonExistentCity' } });

    const formElement = screen.getByTestId('weather-form');
    fireEvent.submit(formElement);

    await waitFor(() => {
      const errorMessage = screen.getByText('Location not found.');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('handles general error', async () => {
    jest
      .spyOn(axios, 'get')
      .mockRejectedValue({ message: 'Some error occurred' });

    render(<WeatherApp />);

    const inputElement = screen.getByPlaceholderText('Enter location');
    fireEvent.change(inputElement, { target: { value: 'SampleCity' } });

    const formElement = screen.getByTestId('weather-form');
    fireEvent.submit(formElement);

    await waitFor(() => {
      const errorMessage = screen.getByText(
        'An error occurred. Please try again later.'
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('clears input field after search', async () => {
    const mockData = {
      data: {
        name: 'SampleCity',
        main: {
          temp: 22,
          temp_min: 20,
          temp_max: 25,
          feels_like: 23,
          humidity: 50,
          pressure: '1013 hPa',
        },
        weather: [{ description: 'Clear sky' }],
        wind: { speed: 5 },
      },
    };

    jest.spyOn(axios, 'get').mockResolvedValue(mockData);

    render(<WeatherApp />);

    const inputElement = screen.getByPlaceholderText('Enter location');
    fireEvent.change(inputElement, { target: { value: 'SampleCity' } });

    const formElement = screen.getByTestId('weather-form');
    fireEvent.submit(formElement);

    await waitFor(() => {
      expect(screen.getByText('SampleCity')).toBeInTheDocument();
    });

    await waitFor(() => {
      // Ensure input field is cleared after search
      const clearedInput = screen.getByPlaceholderText(
        'Enter location'
      ) as HTMLInputElement;
      expect(clearedInput.value).toBe('');
    });
  });
});
