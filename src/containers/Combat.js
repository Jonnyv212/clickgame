import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentEnemyHealth } from "../actions/enemyActions";
import {setEnemyHP} from "../containers/EnemyData"

export const Combat = enemyData => {
  const dispatch = useDispatch();
  // const combatEnabled = useSelector(state => state.enemyStates.combatEnabled);
  let eHealth = enemyData.monsterHealth;
  //   let pHealth = currentPlayerHealth;

    var enemyInterval = setInterval(() => {
      
      if (eHealth > 0) {
        eHealth -= 1;
        dispatch(setCurrentEnemyHealth(eHealth));
        // setEnemyHP(eHealth)Z
        console.log("current monster health: " + eHealth);
      } else if (eHealth <= 0) {
        console.log("Enemy defeated!");
        clearInterval(enemyInterval);
        // setNewEnemy(eData);
      }
    }, 1300);
};
