import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentEnemyData } from "../actions/enemyActions";
import { Combat } from "./Combat";
import { DisplayEnemy } from "../components/DisplayEnemy";

export const EnemyData = () => {
  const fullEnemyData = useSelector(state => state.enemyStates.enemyData);
  const currentEnemy = useSelector(state => state.enemyStates.currentEnemyData);
  const currentEnemyHealth = useSelector(state => state.enemyStates.health);
  const dispatch = useDispatch();

  // var hpPercent = 0;
  // var hpRemoved = 0;

  // if (currentEnemyHealth <= 0) {
  //   // hpPercent = 1;
  // } else {
  //   hpPercent = (currentEnemyHealth / currentEnemy.monsterHealth) * 100;
  //   hpRemoved = 100 - hpPercent;
  //   console.log("Percentage: " + hpPercent + "%");
  // }

  const setNewEnemy = fullEnemyData => {
    let rNum = Math.round(Math.random() * (fullEnemyData.length - 1));
    dispatch(setCurrentEnemyData(fullEnemyData[rNum]));

    Combat(currentEnemy);
    // document.getElementById("fightBtn").disabled = false;
  };

  return (
    <div>
      <DisplayEnemy EnemyData={currentEnemy} />
      <button id="fightBtn" onClick={() => setNewEnemy(fullEnemyData)}>
        FIGHT
      </button>
    </div>
  );
};
