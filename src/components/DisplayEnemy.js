import React from "react";
import "./DisplayEnemy.css";

export const DisplayEnemy = props => {
  let hpPercent = 0;
  let hpRemoved = 0;

  if (props.EnemyHealth <= 0) {
    // hpPercent = 1;
  } else {
    hpPercent = (props.EnemyHealth / props.EnemyData.monsterHealth) * 100;
    hpRemoved = 100 - hpPercent;
    console.log("Percentage: " + hpPercent + "%");
  }
  // console.log("Enemy Current Health: " + props.EnemyHealth);
  // console.log("Enemy Health: " + props.EnemyData.monsterHealth);
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
      <img className="Image" src={props.EnemyData.monsterImage} alt="slime" />
      {/* <div>Enemy Health: {props.EnemyHealth}</div> */}
      {/* <div>Enemy Level: {props.EnemyData.monsterLevel}</div> */}
    </div>
  );
};
