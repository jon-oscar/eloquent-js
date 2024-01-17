import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import WeatherApp from './WeatherApp';

beforeEach(() => {
  global.fetch = jest.fn(); // Mock the global fetch function
});

afterEach(() => {
  jest.restoreAllMocks(); // Restore all mocked functions
});

const mockData = {
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
};

const submitFormWithCity = (city: string): void => {
  const inputElement = screen.getByPlaceholderText('Enter location');
  fireEvent.change(inputElement, { target: { value: city } });
};

const assertErrorMessageNotShown = (message: string): void => {
  const errorMessage = screen.queryByText(message);
  expect(errorMessage).toBeNull();
};

describe('WeatherApp', () => {
  it('renders and clears input field after search', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    render(<WeatherApp />);

    const inputElement = screen.getByPlaceholderText('Enter location');
    expect(inputElement).toBeInTheDocument();

    submitFormWithCity('SampleCity');

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

  it('fetches weather data and displays it', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    render(<WeatherApp />);

    // Assert that the error message is not initially present
    assertErrorMessageNotShown('An error occurred. Please try again later.');

    submitFormWithCity('SampleCity');

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
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 404,
      json: () => Promise.resolve({ message: 'Location not found' }),
    });

    render(<WeatherApp />);

    const inputElement = screen.getByPlaceholderText('Enter location');
    fireEvent.change(inputElement, { target: { value: 'NonExistentCity' } });

    submitFormWithCity('SampleCity');

    // Assert that the error message is not initially present
    assertErrorMessageNotShown('Location not found');

    const formElement = screen.getByTestId('weather-form');
    fireEvent.submit(formElement);

    await waitFor(() => {
      const errorMessage = screen.getByText('Location not found');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('handles general error', async () => {
    (global.fetch as jest.Mock).mockRejectedValue({
      message: 'Some error occurred',
    });

    render(<WeatherApp />);

    submitFormWithCity('SampleCity');

    // Assert that the error message is not initially present
    assertErrorMessageNotShown('An error occurred. Please try again later.');

    const formElement = screen.getByTestId('weather-form');
    fireEvent.submit(formElement);

    await waitFor(() => {
      const errorMessage = screen.getByText(
        'An error occurred. Please try again later.'
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
