import React from 'react';
import './weatherDisplay.css'


const WeatherDisplay = ({name, bg, temp, condition, src, date, rain}) => {


    return(
        <div style={{background:`url(${bg}) center center/cover no-repeat` }} className='display-wrapper'>
            {rain ? <div className="rain"></div>: ""}
        <h1 style={{color: 'wheat'}}>{date}</h1>
            <h2 className='name'>{name}</h2>
            <div className='display-wrapper-row'>
                <h3 className='temp'>{temp}</h3>
                <img src={src} />
            </div>
            <h3 className='cond'>{condition}</h3>
        </div>
    )
}

export default WeatherDisplay