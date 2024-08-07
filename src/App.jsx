import * as weatherService from './services/weatherService';
import { useState, useEffect } from 'react';

const App = () => {
  const [weather, setWeather] = useState()

  const fetchData = async () => {
    const data = await weatherService.show('New York');
    console.log('Data:', data);
  };

  useEffect(() => {

    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
      };
      setWeather(newWeatherState);
    };

    // Call the fetch function when the page loads:
    fetchDefaultData();

  }, []);

  return (
    <main>
      <h1>Weather API</h1>
      <button onClick={fetchData}>Fetch Weather Data</button>
    </main>
  );
};

export default App