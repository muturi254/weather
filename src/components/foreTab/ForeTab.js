import React from "react";
import { WiCelsius } from "react-icons/wi";
import { GrMap } from "react-icons/gr";
import './ForeTab.css';


const ForeTab = () => {

    

    return (
        <div className="tab">
            <div className="details">
                <p className="description">Sunny Day</p>
                <div className="details-tab">
                    <p className="temp">21 <span> <WiCelsius size={"1em"} /> </span></p>
                    <div className="address">
                        <p>Mon 21 June</p>
                        <p> <GrMap /> Nairobi</p>
                    </div>
                </div>
               
            </div>
            <img src={`http://openweathermap.org/img/wn/04d@4x.png`} alt="weather icon" />
        </div>
    )
}

export default ForeTab;
