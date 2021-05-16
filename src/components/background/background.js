import React, {useEffect, useState} from 'react';

const Background = ({rain, bg , lightRain}) => {


    return(
        <div style={{backgroundImage: `url(${bg})`  }} className='bg-wrapper'>
            {rain ? <div className='rain'></div> : ''}
            {lightRain ? <div className='lightRain'></div> : ''}
        </div>)
}

export default Background

