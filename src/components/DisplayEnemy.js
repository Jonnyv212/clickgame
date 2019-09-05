import React from "react";
import "./DisplayEnemy.css";

export const DisplayEnemy = props => {
  let hpPercent =
    (props.currentEnemyData.monsterHealth / props.enemyMaxHealth) * 100;
  let hpRemoved = 100 - hpPercent;
  return (
    <div className="enemyComponent">
      <div className="enemyHealthBar">
        <div className="enemyHealthGreen" style={{ width: hpPercent + "%" }}>
          &nbsp;
        </div>
        <div className="enemyHealthRed" style={{ width: hpRemoved + "%" }}>
          &nbsp;
        </div>
      </div>
      <img
        className="Image"
        src={props.currentEnemyData.monsterImage}
        alt="slime"
      />
      <div>
        Enemy Health: {props.currentEnemyData.monsterHealth}, {hpPercent}%
      </div>
      <div>Enemy Level: {props.currentEnemyData.monsterLevel}</div>
      <button id="fightBtn" onClick={() => props.NewEnemy()}>
        FIGHT
      </button>
    </div>
  );
};
