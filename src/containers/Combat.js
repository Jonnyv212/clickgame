import React from "react";
import { useSelector, useDispatch } from "react-redux";

export const Combat = enemyData => {
  const dispatch = useDispatch();
  const combatEnabled = useSelector(state => state.enemyStates.combatEnabled);
  let eHealth = enemyData.monsterHealth;
  //   let pHealth = currentPlayerHealth;
  dispatch(setCombat(true));

  //   document.getElementById("fightBtn").disabled = true;
  if (combatEnabled == true) {
    var enemyInterval = setInterval(() => {
      if (eHealth > 0) {
        eHealth -= playerAttack();
        dispatch(setCurrentEnemyHealth(eHealth));
        // console.log("current monster health: " + eHealth);
      } else if (eHealth <= 0) {
        console.log("Enemy defeated!");
        dispatch(setCombat(false));
        gainExp(currentEnemy.monsterExp);
        lootCheck();
        clearInterval(enemyInterval);
        setNewEnemy(eData);
      }
    }, 1300);

    // var playerInterval = setInterval(() => {
    //   if (pHealth > 0) {
    //     pHealth -= playerAttack();
    //     dispatch(setCurrentEnemyHealth(pHealth));
    //     // console.log("current monster health: " + eHealth);
    //   } else if (pHealth <= 0) {
    //     console.log("Enemy defeated!");
    //     dispatch(setCombat(false));
    //     // gainExp(currentEnemy.monsterExp)
    //     // lootCheck();
    //     clearInterval(playerInterval);
    //     // setNewEnemy(eData);
    //   }
    // }, 1300);
  }
};
