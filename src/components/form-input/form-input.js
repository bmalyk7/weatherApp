import React,{useState, useEffect} from 'react';

import './form-input.css'


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
                <input onChange={onChange} type='text' value={row} className='input' placeholder="Please enter the city" />
                <button className='btn-form' type='submit'>Submit</button>
            </form>
            {error ? <span className='incorrect-name'>Please enter correct name</span> : ''}



        </div>
    )
}

export default FormInput