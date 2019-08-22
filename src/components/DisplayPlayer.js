import React from "react";
import "./DisplayPlayer.css"

export const DisplayPlayer = props => {
    let hpPercent = 0;
    let hpRemoved = 0;
    console.log(props)
    if (props.PlayerHealth <= 0) {
      // hpPercent = 1;
    } else {
      hpPercent = (props.PlayerHealth / props.PlayerData.playerHealth) * 100;
      hpRemoved = 100 - hpPercent;
      console.log("Percentage: " + hpPercent + "%");
    }
    // console.log("Enemy Current Health: " + props.EnemyHealth);
    // console.log("Enemy Health: " + props.EnemyData.monsterHealth);
  return (
    <div>
      <div className="playerHealthBar">
        <div className="healthGreen" style={{ width: hpPercent + "%" }}>
          &nbsp;
        </div>
        <div className="healthRed" style={{ width: hpRemoved + "%" }}>
          &nbsp;
        </div>
      </div>
      {/* <img className="Image" src={props.EnemyData.monsterImage} alt="slime" /> */}
      {/* <div>Enemy Health: {props.EnemyHealth}</div> */}
      {/* <div>Enemy Level: {props.EnemyData.monsterLevel}</div> */}
    </div>
  );
};
