import React from "react";
import { useState } from "react";
import Styles from './search.module.css';

function Search({setTerm}) {


    const handleSubmit = (e) => {
        e.preventDefault();
        setTerm(e.target.childNodes[0].value);
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a city name ..." />
        </form>
    )
}

export default Search;