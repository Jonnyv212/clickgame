import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentEnemyData,
  setCurrentEnemyHealth
} from "../actions/enemyActions";
import { DisplayEnemy } from "../components/DisplayEnemy";

export const EnemyData = () => {
  const fullEnemyData = useSelector(state => state.enemyStates.enemyData);
  const currentEnemy = useSelector(state => state.enemyStates.currentEnemyData);
  const dispatch = useDispatch();
  const [maxHP, setMaxHP] = useState();

  useEffect(() => {
    setNewEnemy(fullEnemyData);
  }, []);

  const setNewEnemy = fullEnemyData => {
    let rNum = Math.round(Math.random() * (fullEnemyData.length - 1));
    dispatch(setCurrentEnemyData(fullEnemyData[rNum]));
    setEnemyHealth(fullEnemyData[rNum].monsterHealth);
    setMaxHP(fullEnemyData[rNum].monsterHealth);
    console.log(rNum);
  };

  const setEnemyHealth = enemyHealth => {
    dispatch(setCurrentEnemyHealth(enemyHealth));
  };

  const Combat = enemyData => {
    let eHealth = enemyData.monsterHealth;

    var enemyInterval = setInterval(() => {
      if (eHealth > 0) {
        eHealth -= 5;
        setEnemyHealth(eHealth);

        console.log("current monster health: " + eHealth);
      } else if (eHealth <= 0) {
        setNewEnemy(fullEnemyData);
        console.log("Enemy defeated!");
        clearInterval(enemyInterval);
      }
    }, 1300);
  };

  return (
    <div>
      <DisplayEnemy
        NewEnemy={() => Combat(currentEnemy)}
        currentEnemyData={currentEnemy}
        enemyMaxHealth={maxHP}
      />
    </div>
  );
};
