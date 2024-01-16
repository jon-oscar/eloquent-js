import { useState } from 'react';

export default function SearchDominantDirection() {
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [input, setInput] = useState<string>('');

  async function handleFormSubmit(
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    try {
      // Fetch weather data from the API using Axios
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
    setInput('');
  }

  function handleLocationInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setLocationInput(event.target.value);
  }

  return (
    <div>
      <div className='py-1'>
        <form onSubmit={handleFormSubmit} data-testid='weather-form'>
          <input
            className='rounded-md border border-white bg-yellow-300 p-1 text-white outline-none placeholder:text-white'
            type='text'
            value={input}
            placeholder='Enter location'
            onChange={handleLocationInputChange}
          />
        </form>
      </div>
    </div>
  );
}
