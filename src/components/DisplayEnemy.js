import React from "react";

 export const DisplayEnemy = (props) => {
      // console.log("Spawning a: " + props.EnemyData.mosnterName)
    return (
      <div>
        <img
          className="Image"
          src={props.EnemyData.monsterImage}
          alt="slime"
        />
        <div>Enemy Health: {props.EnemyHealth}</div>
        <div>Enemy Level: {props.EnemyData.monsterLevel}</div>

      </div>
    );
  };