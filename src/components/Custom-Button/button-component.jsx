import React from "react";
import './button.styles.css'

const Button = ({ btnNames, onClickHandler }) => {
  
  return (
    <div>
      <button className='custum-button' onClick={onClickHandler}>  {btnNames}</button>
    </div>
  );
};

export default Button;
