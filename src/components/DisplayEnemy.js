import React from "react";
import image from "../Images/Enemies/slime.jpg"
 export const DisplayEnemy = (props) => {
      // console.log(props.EnemyData.monsterImage)
    return (
      <div>
        <img
          className="Image"
          src={props.EnemyData.monsterImage}
          alt="slime"
        //   onClick={this.playerAttack}
        />
        <div>Enemy Health: {props.EnemyData.monsterHealth}</div>
        <div>Enemy Level: {props.EnemyData.monsterLevel}</div>

      </div>
    );
  };