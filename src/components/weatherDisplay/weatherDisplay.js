import React from 'react';


const WeatherDisplay = ({name, temp, condition}) => {


    return(
        <div>
        <h1>Weather App</h1>
        <h2>{name}</h2>
        <h3>{temp}</h3>
        <h3>{condition}</h3>
        </div>
    )
}

export default WeatherDisplay