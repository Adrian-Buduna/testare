import React from 'react'
import './input.styles.css'

const Input = ({onAddScoreHandler, typesInp}) => {
    return (
        <div>
            <input onChange={onAddScoreHandler} className='inputCls' type={typesInp} ></input>
        </div>
    )
}

export default Input
