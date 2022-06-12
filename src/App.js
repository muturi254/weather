import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Display from './components/display/Display';
import Search from './components/searchbar/Searchbar';

function App() {

  const API_KEY = '006231c08feead3e82415750a0b51974';
  const [term, setTerm] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const handleTerm = (term) => {
    setTerm(term)
  }

  // useEffect(()=> {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`).then(res => res.json()).then(data => setWeatherData(data));
  // }, [term])

  const data = {
    "coord": {
      "lon": 36.8167,
      "lat": -1.2833
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 296.08,
      "feels_like": 295.63,
      "temp_min": 294.8,
      "temp_max": 296.08,
      "pressure": 1020,
      "humidity": 46
    },
    "visibility": 10000,
    "wind": {
      "speed": 5.14,
      "deg": 150
    },
    "clouds": {
      "all": 75
    },
    "dt": 1655044210,
    "sys": {
      "type": 1,
      "id": 2558,
      "country": "KE",
      "sunrise": 1655004672,
      "sunset": 1655048043
    },
    "timezone": 10800,
    "id": 184745,
    "name": "Nairobi",
    "cod": 200
  }

  console.log(weatherData);

  return (
    <div className="App">
      <Search setTerm={handleTerm} />
      <Display data={data} />
    </div>
  );
}

export default App;
