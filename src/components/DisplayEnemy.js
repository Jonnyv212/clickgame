import React from "react";
import "./DisplayEnemy.css";

export const DisplayEnemy = props => {
  return (
    <div className="enemyComponent">
      <div className="enemyHealthBar">
        <div className="enemyHealthGreen" style={{ width: 100 + "%" }}>
          &nbsp;
        </div>
        <div className="enemyHealthRed" style={{ width: 100 + "%" }}>
          &nbsp;
        </div>
      </div>
      <img className="Image" src={props.EnemyData.monsterImage} alt="slime" />
      <div>Enemy Health: {props.EnemyData.monsterHealth}</div>
      <div>Enemy Level: {props.EnemyData.monsterLevel}</div>
    </div>
  );
};
