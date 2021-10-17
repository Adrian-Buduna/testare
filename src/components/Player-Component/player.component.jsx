import React from "react";
import "./player.styles.css";
// import Input from "../Custom-Input/input.component";
import { useState, useEffect } from "react";

const Player = ({ addScore,
  // callFunction,
  stock,
  ...otherProps }) => {
  // console.log(otherProps)
  
  const [currentScore, setCurrentScore] = useState(0);
  const onChangeScoreHandler = (e) => {
    e.preventDefault();
    setCurrentScore(e.target.value);
  };
  const [stockScore, setStockScore] = useState([]);
  const handlerStockScore = () => {
    setStockScore([currentScore, ...otherProps.roundScore ]);
  
  };
  console.log(stock, 'aici e stock')
  
  // useEffect(() => {
  //   if (stock) { handlerStockScore() }
  // })
  // if(stock){handlerStockScore()}
  // callFunction(handlerStockScore);
  console.log(currentScore);
  return (
    <div className="player">
      <h1 className="player-text">Name:{otherProps.name} </h1>
      <h1 className="player-text">Scor:{otherProps.score} </h1>

      <h1 className="player-text">Round number:{otherProps.roundScore} </h1>

      <div>
        {!addScore ? (
          <input
            onChange={onChangeScoreHandler}
            type="number"
            value={currentScore}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Player;
