import React from "react";
import "./first-page.styles.css";
import Button from "../../components/Custom-Button/button-component";
import { playersData } from "../../data/DUMMY_DATA";
import { useState } from "react";

const FirstPage = () => {
  const [newPlayer, setNewPlayer] = useState("");
  const [addPlayer, setAddPlayer] = useState("");
  //Change Handler
  const getPlayerHandler = (e) => {
    e.preventDefault();
    setNewPlayer(e.target.value);
  };
  //lick Handle (add player)
  const addPlayerHandler = (e) => {
    e.preventDefault();
    setAddPlayer(newPlayer);
    const adding = () => {
      const player = {
        name: newPlayer,
        id: Math.random() * 1000,
        roundScore: [],
        score: 0,
      };
      playersData.push(player);
    };
    adding();
    setNewPlayer("");

    console.log(playersData);
  };
  return (
    <div className="first-page">
      {/* add player elements*/}
      <form className="first-page-form">
        <input
          className="first-page-input"
          onChange={getPlayerHandler}
          placeholder="player name..."
          value={newPlayer}
        />
        <Button onClickHandler={addPlayerHandler} btnNames="Add Player" />
      </form>
    </div>
  );
};

export default FirstPage;
