import React, {useState, useEffect} from 'react';
import './App.css';
import Spinner from "./components/spiner/spinner";
import WeatherDisplay from "./components/weatherDisplay/weatherDisplay";
import FormInput from "./components/form-input/form-input";


function App() {
    const [state, setState] = useState({});
    const [bg, setBg] = useState('');
    const [windDir, setWindDir] = useState('');
    const [error, setError] = useState(false);
    const [isRain, setRain] = useState(false);
    const [isSnow, setSnow] = useState(false);

    const changeBg = () => {
        switch (state.isDay) {
            case 1:
                setBg('https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80')
                break;
            case 0:
                setBg('https://images.unsplash.com/photo-1593371256584-ac70d0ab43d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80')
        }
    }

    const checkRain = () => {
       setRain(state.condition?.includes('rain'));
       console.log(isRain);
    }
    const checkSnow = () => {
        setSnow(state.condition?.includes('snow'));
        console.log(isSnow);
    }



    const sendCity = (city) => {

        fetch(`http://api.weatherapi.com/v1/current.json?key=b51b016362ba485b828213133211105&q=${city}&aqi=no`)
            .then(res =>
                    res.json()

            )
            .then(body => {
                setError(false);
                setState({
                    name: body.location.name,
                    temp_c: body.current.temp_c + '°C',
                    condition: body.current.condition.text,
                    icon: body.current.condition.icon,
                    isDay: body.current.is_day,
                    date: body.location.localtime,
                    windSpeed: body.current.wind_kph + 'km/h',
                    windDirection: body.current.wind_dir,
                })
            })
            .catch(error => {
                setError(true);
            })
    }
    useEffect(() => {
        changeBg();
        checkRain();
        checkSnow();
    }, [state])

    return (
        <div className="App">
            <div className='main-container'>
                <h1 className='main-title'>Weather app</h1>
                <div className='app-wrapper'>
                    <FormInput sendCity={sendCity} error={error}/>
                    { !error ? <WeatherDisplay
                        bg={bg} src={state.icon} name={state.name}
                        date={state.date} temp={state.temp_c}
                        condition={state.condition} rain={isRain}
                        snow={isSnow}
                    /> : ''}
                </div>
                {!error ?
                    <>
                    <div style={{display:'flex', alignItems: 'center',gap: '20px'}}>
                        <span style={{color:'white', fontSize: '25px'}}>Wind speed:</span>
                        <span style={{color:'white', fontSize: '25px'}}>{state.windSpeed}</span>
                    </div>
                    <div style={{display:'flex', alignItems: 'center',gap: '20px'}}>
                        <span style={{color:'white', fontSize: '25px'}}>Wind direction:</span>
                        <span style={{color:'white', fontSize: '25px'}}>{state.windDirection}</span>
                    </div>
                    </>
                    : ' ' }
            </div>
        </div>
    );
}

export default App;
