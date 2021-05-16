import React, {useState, useEffect} from 'react';
import './App.css';
import Spinner from "./components/spiner/spinner";
import Background from "./components/background/background";
import WeatherDisplay from "./components/weatherDisplay/weatherDisplay";
import FormInput from "./components/form-input/form-input";


function App() {
    const [state,setState] = useState({});

    const [bg, setBg] = useState(null);
    const [rain, setRain] = useState(false);
    const [lightRain, setLightRain] = useState(false);
    const [load, setLoad] = useState(false);

    const changeBg = ()=>{
        switch(state.condition){
            case 'Sunny':
                setBg('https://wallpapercave.com/wp/wp7399557.jpg');
                setRain(false)
                setLightRain(false);
                break;
            case 'Partly cloudy':
                setBg('https://seojames.com/wp-content/uploads/2017/10/Clear-Skies-Ahead.jpg');
                setRain(false)
                setLightRain(false);
                break;
            case 'Overcast':
                setBg('https://motionarray.imgix.net/preview-2139iK66sRYeMr_0013.jpg');
                setLightRain(false);
                break;
            case 'Patchy rain possible':
                setBg('https://wallup.net/wp-content/uploads/2019/09/336079-road-rain-storm-clouds-sky.jpg');
                setRain(false);
                setLightRain(true);
                break;
            case 'Light rain':
                setBg('https://wallup.net/wp-content/uploads/2019/09/336079-road-rain-storm-clouds-sky.jpg');
                setRain(false);
                setLightRain(true);
                break;
            case 'Patchy light rain with thunder':
                setBg('https://wallup.net/wp-content/uploads/2019/09/336079-road-rain-storm-clouds-sky.jpg');
                setRain(true);
                setLightRain(false);
                break;
        }
    }

    const sendCity = (city) => {
        setLoad(true);
        fetch(`http://api.weatherapi.com/v1/current.json?key=b51b016362ba485b828213133211105&q=${city}&aqi=no`)
            .then(res =>
                res.json())
            .then(body =>  {
                setLoad(false);
                setState({
                name: body.location.name,
                temp_c: body.current.temp_c,
                condition: body.current.condition.text,
                icon: body.current.condition.icon,
            })}  )
            .catch(error=>console.log(error))
    }
  useEffect(()=>{
      changeBg();
      sendCity();
  }, [state])

  return (
    <div className="App">
        <Background rain={rain} bg={bg} lightRain={lightRain} />
        {load ? <Spinner /> : ''}
        <WeatherDisplay name={state.name} temp={state.temp_c} condition={state.condition} />
        <FormInput sendCity={sendCity}  />
    </div>
  );
}

export default App;
