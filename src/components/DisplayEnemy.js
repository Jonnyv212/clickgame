import React from "react";
import "./DisplayEnemy.css";

export const DisplayEnemy = props => {
  let hpPercent = 0;

  if (props.EnemyHealth <= 0) {
    hpPercent = 1;
  } else {
    hpPercent = (props.EnemyHealth / props.EnemyData.monsterHealth) * 100;
    console.log("Percentage: " + hpPercent + "%");
  }
  console.log("Enemy Current Health: " + props.EnemyHealth);
  console.log("Enemy Health: " + props.EnemyData.monsterHealth);
  return (
    <div>
      <div className="healthBar">
        <div className="healthGreen" style={{ width: hpPercent + "%" }}>
          HP
        </div>
        <div className="healthRed" />
      </div>
      <img className="Image" src={props.EnemyData.monsterImage} alt="slime" />
      <div>Enemy Health: {props.EnemyHealth}</div>
      <div>Enemy Level: {props.EnemyData.monsterLevel}</div>
    </div>
  );
};
