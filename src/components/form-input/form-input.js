import React,{useState, useEffect} from 'react';


const FormInput = ({sendCity, error}) => {
const[row, setRow] = useState('')

const onChange = (e) => {
    setRow(e.target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    sendCity(row);
}



    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} type='text' value={row} className={error ? 'error-input' : '' } />
                <button type='submit'>Click</button>
            </form>


        </div>
    )
}

export default FormInput