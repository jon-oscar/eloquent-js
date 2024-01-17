import React, { useState } from 'react';
import { every } from './every';

export type WeatherData = {
  name?: string;
  main?: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
    pressure: string;
  };
  weather?: [{ description: string }];
  wind?: {
    speed: number;
  };
};

// This key is free and public so there's no harm on leaving it right here
const API_KEY = '297cdcb5306dab20d8338f39e1459828';

/**
 * Allows users to search for weather information based on a location input. It fetches data from the OpenWeatherMap API
 * and displays it to the user. Also, compare the maximum temperature with the feel temperature and provide a conditional message.
 * If an error occurs an error message is displayed.
 * @returns A user interface that allows users to input a location and view weather information.
 */
export default function WeatherApp(): JSX.Element {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [locationInput, setLocationInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Construct the API URL based on user input
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${API_KEY}`;

  // Handle user's Enter key press to trigger weather data retrieval
  async function handleFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      // Fetch weather data from the API
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data: WeatherData = await response.json();
        setWeatherData(data);
        setError(null);
      } else {
        setError('Location not found');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    // Clear the input field after search
    setLocationInput('');
  }

  // Handle changes in the location input field
  function handleLocationInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setLocationInput(event.target.value);
  }

  return (
    <div className='relative rounded-md  bg-black text-white opacity-70'>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage: `url(https://source.unsplash.com/1600x900/?${weatherData.name})`,
          opacity: 0.5,
        }}
      />
      <div className='container relative z-10 flex flex-col justify-between rounded-md p-8'>
        <div className='py-1'>
          <form data-testid='weather-form' onSubmit={handleFormSubmit}>
            <input
              className='rounded-md border border-white bg-transparent p-1 text-white outline-none placeholder:text-white'
              onChange={handleLocationInputChange}
              placeholder='Enter location'
              type='text'
              value={locationInput}
            />
          </form>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='flex'>
          <div className='flex-1'>
            <span className='mt-2 text-sm'>{weatherData.name}</span>
            <div className='flex'>
              <div className='flex-1'>
                {weatherData.main && (
                  <h1 className='text-4xl '>
                    {weatherData.main.temp.toFixed()} ºC
                  </h1>
                )}
              </div>
              <div className='flex-1'>
                {weatherData.main && (
                  <p className='text-sm font-semibold'>
                    feels {weatherData.main.feels_like.toFixed()} ºC
                  </p>
                )}
                {weatherData.main && (
                  <p className='text-sm font-semibold'>
                    min {weatherData.main.temp_min.toFixed()} ºC
                  </p>
                )}
                {weatherData.main && (
                  <p className='text-sm font-semibold'>
                    max {weatherData.main.temp_max.toFixed()} ºC
                  </p>
                )}
              </div>
            </div>
            <div>
              {weatherData.weather && (
                <p className='text-lg font-semibold'>
                  {weatherData.weather[0].description}
                </p>
              )}
            </div>
          </div>
          {weatherData.name && (
            <div className='flex-1'>
              <div className=' my-2 flex items-center justify-between gap-2 text-center'>
                <div>
                  {weatherData.main && (
                    <p className='text-lg'>{weatherData.main.pressure}</p>
                  )}
                  <p className='text-sm'>Pressure</p>
                </div>
                <div>
                  {weatherData.main && (
                    <p className='text-lg'>{weatherData.main.humidity} %</p>
                  )}
                  <p className='text-sm'>Humidity</p>
                </div>
                <div>
                  {weatherData.wind && (
                    <p className='text-lg'>
                      {weatherData.wind.speed.toFixed()} MPH
                    </p>
                  )}
                  <p className='text-sm'>Wind</p>
                </div>
              </div>
              {every(
                [Number(weatherData.main?.feels_like.toFixed()) ?? 0],
                (n) => n <= (Number(weatherData.main?.temp_max) ?? 0)
              ) ? (
                <span>👍 The temperature does not feel over the maximum</span>
              ) : (
                <span>🔥 The temperature feels warmer than the maximum</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
