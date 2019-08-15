import React from "react";

 export const DisplayEnemy = (props) => {
     console.log(props.EnemyData.monsterHealth)
    return (
      <div>
        <img
          className="Image"
          src={require(`../Images/Enemies/slime.jpg`)}
          alt="slime"
        //   onClick={this.playerAttack}
        />
        <div>Enemy Health: {props.EnemyData.monsterHealth}</div>
      </div>
    );
  };