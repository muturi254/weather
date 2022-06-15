import React from "react";
import { WiCelsius } from "react-icons/wi";
import { GrMap } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import './ForeTab.css';


const ForeTab = ({data, country}) => {

    const weather = data.weather[0];

    return (
        <div className="tab">
            <div className="details">
                <p className="description">{weather.description}</p>
                <div className="details-tab">
                    <p className="temp">{(data.main.temp - 273.15).toFixed(2)} <span> <WiCelsius size={"1em"} /> </span></p>
                    <div className="address">
                        {/* <p>{days[new Date(data.dt_txt).getDay()]}</p> */}
                        <p>{new Date(data.dt_txt).toDateString()}</p>
                        <p style={{ marginBottom: ".4rem" }}> <BsClock /> {new Date(data.dt_txt).toLocaleTimeString()}</p>
                        <p> <GrMap /> {country}</p>
                    </div>
                </div>
               
            </div>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@4x.png`} alt="weather icon" />
        </div>
    )
}

export default ForeTab;
