import React from "react";
import Player from "../Player-Component/player.component";
import { playersData } from "../../data/DUMMY_DATA";
import "./players-list.styles.css";

const PlayersList = ({
  addScore,
  // callFunction,
  stock
}) => {
  // console.log(playersData);

  return (
    <form className="player-list">
      {playersData.map(({ id, ...otherProps }) => {
        return (
          <Player
            key={id}
            addScore={addScore}
            {...otherProps}
            // callFunction={callFunction}
            stock={stock}
          />
        );
      })}
    </form>
  );
};

export default PlayersList;
