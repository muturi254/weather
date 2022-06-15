import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Display from './components/display/Display';
import Search from './components/searchbar/Searchbar';

function App() {

  const API_KEY = '006231c08feead3e82415750a0b51974';
  const [term, setTerm] = useState("Nairobi");
  const [weatherData, setWeatherData] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});
  const [loading, setLoading] = useState(true);

  const handleTerm = (term) => {
    setTerm(term)
  }

  useEffect(()=> {

   const fetchData = async () => {
     const [data1, data2] = await Promise.all([
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`),
       fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${term}&cnt=3&appid=${API_KEY}`)
     ]);

     const weather = await data1.json();
     const forecast = await data2.json();

     if (weather && forecast) {
       setWeatherData(weather);
       setWeatherForecast(forecast);
       setLoading(false)
     }
   }



    // Promise.all(
    //   [
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${term}&appid=${API_KEY}`).then(res => res.json()).then(data => {
    //       setWeatherData(data);
    //       setLoading(false);
    //     }),

    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${term}&cnt=3&appid=${API_KEY}`).then(res => res.json()).then(data => {
    //       setWeatherForecast(data);
    //       setLoading(false);
    //     })

    //   ]
    // ).catch(error => console.log(error))
   fetchData()
    
  }, [term]);

  

  return (
    <div className="App">
      <Search setTerm={handleTerm} />
      {loading === false && <Display data={weatherData} forecast={weatherForecast} />}
    </div>
  );
}

export default App;
