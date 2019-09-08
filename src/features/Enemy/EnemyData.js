import React, { useEffect, useState } from "react";
import {
  setEnemyData,
  setCurrentEnemyData,
  setCurrentEnemyHealth
} from "../../redux/actions/enemyActions";
import { setCombat } from "../../redux/actions/combatActions";
import { setCurrentPlayerHealth } from "../../redux/actions/playerActions";
import { DisplayEnemy } from "./DisplayEnemy";
import { connect } from "react-redux";

const EnemyData = ({
  theCombat,
  setCombat,
  fullEnemyData,
  setFullEnemyData,
  currentEnemyData,
  setCurrentEnemyData,
  setCurrentEnemyHealth,
  currentEnemyHealth,
  ownProps
}) => {
  // const fullEnemyData = useSelector(state => state.enemyStates.enemyData);
  // const currentEnemy = useSelector(state => state.enemyStates.currentEnemyData);
  // const fullPlayerData = useSelector(state => state.playerStates.playerData);
  // const combat = useSelector(state => state.combatStates.combat);
  // const [combat, setCombat] = useState(false);

  // this.changeCombat(true);
  // setTheCombat(true);

  const setNewEnemy = fullEnemyData => {
    let rNum = Math.round(Math.random() * (fullEnemyData.length - 1));
    setCurrentEnemyData(fullEnemyData[rNum]);
    // setCurrentEnemyHealth(fullEnemyData[rNum].monsterHealth);
    // setMaxHP(fullEnemyData[rNum].monsterHealth);
    console.log("Spawning: " + fullEnemyData[rNum].monsterName);
  };
  useEffect(() => setNewEnemy(fullEnemyData), []);

  // const updateEnemyHealth = fullEnemyData => {
  //   // if (combatOff == true) return dispatch(setCurrentEnemyHealth(eHealth));
  //   // if (currentEnemy.monsterHealth > 0) {
  //   //   currentEnemy.monsterHealth -= 5;
  //   //   dispatch(setCurrentEnemyHealth(currentEnemy.monsterHealth));
  //   //   console.log("Enemy Health: " + currentEnemy.monsterHealth);
  //   // } else if (currentEnemy.monsterHealth <= 0) {
  //   //   setTheCombat(false);
  //   //   console.log("Enemy defeated!");
  //   //   console.log("CombatOff: " + theCombat);
  //   // }
  //   // Combat();

  //   var enemyInterval = setInterval(() => {
  //     console.log(currentEnemyData.monsterHealth);
  //     console.log(theCombat);
  //     const currentHP = currentEnemyData;
  //     if (theCombat == true) {
  //       if (currentEnemyData.monsterHealth <= 0) {
  //         setCombat(false);
  //       } else {
  //         currentEnemyData.monsterHealth -= 5;
  //         setCurrentEnemyHealth(currentEnemyData.monsterHealth);
  //       }
  //     } else if (theCombat == false) {
  //       console.log("We got here");
  //       clearInterval(enemyInterval);
  //       // setNewEnemy(fullEnemyData);
  //     }
  //   }, 1300);
  // };

  const test = () => {
    setCombat(true);
    let enemyHP = currentEnemyHealth;

    if (theCombat == true) {
      const combatInterval = setInterval(() => {
        if (enemyHP > 0) {
          console.log(enemyHP);
          enemyHP = enemyHP - 5;
          setCurrentEnemyHealth(enemyHP);
        } else if (enemyHP <= 0) {
          setCombat(false);
          setNewEnemy(fullEnemyData);
          console.log(enemyHP);
          console.log("Combat over");
          clearInterval(combatInterval);
        }
      }, 1500);
    } else if (theCombat == false) {
      console.log("Combat over");
    }
  };

  // const dispatchingThingy = () => {
  //   setTheCombat(true);
  //   Combat();
  // };
  // const Combat = () => {
  //   // let eHealth = enemyData.monsterHealth;/
  //   // let pHealth = fullPlayerData.playerHealth;

  //   // setTheCombat(true);
  //   var enemyInterval = setInterval(() => {
  //     console.log(theCombat);
  //     if (theCombat == true) {
  //       // console.log(theCombat);
  //       updateEnemyHealth();
  //     } else if (theCombat == false) {
  //       console.log("We got here");
  //       clearInterval(enemyInterval);
  //       // setNewEnemy(fullEnemyData);
  //     }
  //   }, 1300);

  //   // var playerInterval = setInterval(() => {
  //   //   if (combatOff == false) {
  //   //     if (pHealth > 0) {
  //   //       pHealth -= 3;
  //   //       dispatch(setCurrentPlayerHealth(pHealth));
  //   //       console.log("current player health: " + pHealth);
  //   //     } else if (pHealth <= 0) {
  //   //       console.log("Player defeated!");
  //   //       // gainExp(currentEnemy.monsterExp)
  //   //       // lootCheck();
  //   //       setCombatOff(true);
  //   //       console.log("CombatOff: " + combatOff);
  //   //       clearInterval(playerInterval);
  //   //       // setNewEnemy(eData);
  //   //     }
  //   //   } else {
  //   //     clearInterval(playerInterval);
  //   //     console.log("CombatOff: " + combatOff);
  //   //   }
  //   // }, 1300);
  // };

  return (
    <DisplayEnemy
      NewEnemy={() => test()}
      currentEnemyData={currentEnemyData}
      enemyMaxHealth={currentEnemyData.monsterHealth}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  theCombat: state.combatStates.combat,
  fullEnemyData: state.enemyStates.enemyData,
  currentEnemyData: state.enemyStates.currentEnemyData,
  currentEnemyHealth: state.enemyStates.currentEnemyData.monsterHealth
});

const mapDispatchToProps = dispatch => {
  return {
    setCombat: event => dispatch(setCombat(event)),
    setFullEnemyData: () => dispatch(setEnemyData()),
    setCurrentEnemyData: event => dispatch(setCurrentEnemyData(event)),
    setCurrentEnemyHealth: event => dispatch(setCurrentEnemyHealth(event))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnemyData);
