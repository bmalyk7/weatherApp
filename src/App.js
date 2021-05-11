import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [state,setState] = useState({});
    const [city, setCity] = useState('');


    const check = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=b51b016362ba485b828213133211105&q=${city}&aqi=no`)
            .then(res=>res.json())
            .then(body =>  setState({
                name: body.location.name,
                temp_c: body.current.temp_c,
                condition: body.current.condition.text,
                icon: body.current.condition.icon,
            })  );
    }
  useEffect(()=>{console.log('update')}, [state])

  return (
    <div className="App">
        <h1>Weather App</h1>
        <h2>{state.name}</h2>
        <h3>{state.temp_c}</h3>
        <h3>{state.condition}</h3>
        <form>
            <input onChange={(e)=>setCity(e.target.value)} type='text' />
        </form>

        <button
            onClick={check}
        >Click</button>
    </div>
  );
}

export default App;
