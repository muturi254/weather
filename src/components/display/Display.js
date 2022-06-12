import React from "react";
import { WiHumidity, WiCelsius } from "react-icons/wi";
import { GiWindsock } from "react-icons/gi";
import { BsWind } from "react-icons/bs";
import './Display.css'


const Display = ({data}) => {

    const weather = data.weather[0];
    


    console.log(weather);
    return (
        <div className="wrapper">
            <h2>{data.name}</h2>
            <div className="data">
                <div className="card">
                    <img src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="" />
                    <hr />
                   <div className="main">
                        <div className="left">
                            <p>{weather.description}</p>
                            <p><WiHumidity /> <span>{data.main.humidity}</span></p>
                            <p><BsWind /> <span>{data.wind.speed}</span></p>
                            <p><GiWindsock /> <span>{data.wind.deg}</span></p>
                        </div>
                        <div className="right">
                            <p>{(data.main.temp - 273.15).toFixed(2)} <WiCelsius size={"1.8em"} values/></p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}


export default Display;