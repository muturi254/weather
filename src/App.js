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

  const forecast = {
    "cod": "200",
    "message": 0,
    "cnt": 2,
    "list": [
      {
        "dt": 1655078400,
        "main": {
          "temp": 289.55,
          "feels_like": 289.52,
          "temp_min": 287.95,
          "temp_max": 289.55,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 837,
          "humidity": 87,
          "temp_kf": 1.6
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 46
        },
        "wind": {
          "speed": 0.85,
          "deg": 89,
          "gust": 1.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-13 00:00:00"
      },
      {
        "dt": 1655089200,
        "main": {
          "temp": 288.02,
          "feels_like": 287.94,
          "temp_min": 286.85,
          "temp_max": 288.02,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 837,
          "humidity": 91,
          "temp_kf": 1.17
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 74
        },
        "wind": {
          "speed": 1,
          "deg": 132,
          "gust": 1.35
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-06-13 03:00:00"
      }
    ],
    "city": {
      "id": 184745,
      "name": "Nairobi",
      "coord": {
        "lat": -1.2833,
        "lon": 36.8167
      },
      "country": "KE",
      "population": 2750547,
      "timezone": 10800,
      "sunrise": 1655091084,
      "sunset": 1655134454
    }
  }

  console.log(weatherData);

  return (
    <div className="App">
      <Search setTerm={handleTerm} />
      <Display data={data} forecast={forecast} />
    </div>
  );
}

export default App;
