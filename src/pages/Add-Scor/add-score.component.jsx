import React from "react";
import Button from "../../components/Custom-Button/button-component";
import PlayersList from "../../components/Players-List/players-list.component";
// import { playersData } from "../../data/DUMMY_DATA";
import { useState } from "react";

import "./add-score.styles.css";
// const callFunction = (fnc) => {
//   fnc()
// }
const AddScore = () => {
  const [stock, setStock] = useState(true);

  const [startGame, setStartGame] = useState(true);
  const handlerStartGame = (e) => {
    e.preventDefault();
    startGame ? setStartGame(false) : setStartGame(true);
  };
  //
  const [addScore, setAddScore] = useState(true);
  const handlerAddScore = (e) => {
    e.preventDefault();
    addScore ? setAddScore(false) : setAddScore(true);
  };
  //same
  const handlerAlredyAddedScore = (e) => {
    e.preventDefault();
    if (!addScore) {
      setAddScore(true);
    } else {
      setAddScore(false);
      // callFunction();
    }
    stock ? setStock(false) : setStock(true);
    console.log(stock);
  };
  //

  return (
    <div className="score-box">
      {startGame ? (
        <div>
          <Button onClickHandler={handlerStartGame} btnNames={"Start Game"} />
          <h1>Let's play</h1>
        </div>
      ) : (
        ""
      )}

      {!startGame ? (
        <div>
          <h1>Round:</h1>
          {addScore ? (
            <Button onClickHandler={handlerAddScore} btnNames="Add Score" />
          ) : (
            ""
          )}

          {!addScore ? (
            <Button
              onClickHandler={handlerAlredyAddedScore}
              btnNames={"Score added"}
            />
          ) : (
            ""
          )}
          <PlayersList
            addScore={addScore}
            // callFunction={callFunction}
            stock={stock}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddScore;
