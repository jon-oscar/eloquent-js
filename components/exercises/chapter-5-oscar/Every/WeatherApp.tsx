import React, { useState } from 'react';
import axios from 'axios';
import { every } from './every';
import './styles.css';

type WeatherData = {
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

const API_KEY = '297cdcb5306dab20d8338f39e1459828';

export default function WeatherApp() {
  const [data, setData] = useState<WeatherData>({});
  const [location, setLocation] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter') {
      axios
        .get<WeatherData>(apiUrl)
        .then((response) => {
          setData(response.data);
          setError(null);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            setError('Location not found.');
          } else {
            setError('An error occurred. Please try again later.');
          }
        });
      setLocation('');
    }
  };

  const handleLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div className='wrapper relative bg-black bg-opacity-40 text-white'>
      <div className='items container relative z-10 flex flex-col justify-between p-8'>
        <div className='py-1'>
          <input
            className='rounded-md border border-white bg-transparent  bg-opacity-30 p-1 text-white outline-none placeholder:text-white'
            type='text'
            value={location}
            placeholder='Enter location'
            onChange={handleLocation}
            onKeyPress={searchLocation}
          />
        </div>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='flex'>
          <div className='flex-1'>
            <span className='mt-2 text-sm'>{data.name}</span>
            <div className='flex gap-2'>
              {data.main && (
                <h1 className='text-4xl '>{data.main.temp.toFixed()} ºC</h1>
              )}
              <div>
                {data.main && (
                  <h1 className='text-xs'>
                    feels {data.main.feels_like.toFixed()} ºC
                  </h1>
                )}
                {data.main && (
                  <h1 className='text-xs'>
                    min {data.main.temp_min.toFixed()} ºC
                  </h1>
                )}
                {data.main && (
                  <h1 className='text-xs'>
                    max {data.main.temp_max.toFixed()} ºC
                  </h1>
                )}
              </div>
            </div>
            <div>
              {data.weather && (
                <p className='text-lg font-semibold'>
                  {data.weather[0].description}
                </p>
              )}
            </div>
          </div>
          {data.name != undefined && (
            <div className='flex-1'>
              <div className=' mt-2 mb-2 flex gap-2 text-center'>
                <div>
                  {data.main && <p className='text-lg'>{data.main.pressure}</p>}
                  <p className='text-sm'>Pressure</p>
                </div>
                <div>
                  {data.main && (
                    <p className='text-lg'>{data.main.humidity} %</p>
                  )}
                  <p className='text-sm'>Humidity</p>
                </div>
                <div>
                  {data.wind && (
                    <p className='text-lg'>{data.wind.speed.toFixed()} MPH</p>
                  )}
                  <p className='text-sm'>Wind</p>
                </div>
              </div>
              {every(
                [
                  data.main?.temp ?? 0,
                  data.main?.temp_min ?? 0,
                  data.main?.feels_like ?? 0,
                ],
                (n) => n < (data.main?.temp_max ?? 0)
              ) ? (
                <span>👍 The temperature feels under the maximum</span>
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
