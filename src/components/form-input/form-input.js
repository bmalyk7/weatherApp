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
                {error ? <div><span className='incorrect-name'>Please enter correct name</span></div> : ''}

                <button className='btn-form' type='submit'>Submit</button>
            </form>



        </div>
    )
}

export default FormInput