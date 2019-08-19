import React from "react";

 export const DisplayEnemy = (props) => {
      console.log("Spawning a: " + props.EnemyData.monsterName)
    return (
      <div>
        <img
          className="Image"
          src={props.EnemyData.monsterImage}
          alt="slime"
        />
        <div>Enemy Health: {props.EnemyData.monsterHealth}</div>
        <div>Enemy Level: {props.EnemyData.monsterLevel}</div>

      </div>
    );
  };