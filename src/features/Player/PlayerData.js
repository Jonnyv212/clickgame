// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {setPlayerData} from "../../redux/actions/playerActions";
// import { DisplayEnemy } from "./DisplayEnemy";

// export const PlayerData = () => {
//   const fullPlayerData = useSelector(state => state.playerStates.playerData);
//   const dispatch = useDispatch();
//   const [maxHP, setMaxHP] = useState();

//   useEffect(() => {
//     setNewEnemy(fullPlayerData);
//   }, []);

// //   const setNewEnemy = fullEnemyData => {
// //     let rNum = Math.round(Math.random() * (fullEnemyData.length - 1));
// //     dispatch(setCurrentEnemyData(fullEnemyData[rNum]));
// //     setEnemyHealth(fullEnemyData[rNum].monsterHealth);
// //     setMaxHP(fullEnemyData[rNum].monsterHealth);
// //     console.log("Spawning: " + fullEnemyData[rNum].monsterName);
// //   };

// //   const setEnemyHealth = enemyHealth => {
// //     dispatch(setCurrentEnemyHealth(enemyHealth));
// //   };

//   const Combat = enemyData => {
//     let eHealth = enemyData.monsterHealth;

//     var enemyInterval = setInterval(() => {
//       if (eHealth > 0) {
//         eHealth -= 5;
//         setEnemyHealth(eHealth);

//         console.log("current monster health: " + eHealth);
//       } else if (eHealth <= 0) {
//         setNewEnemy(fullEnemyData);
//         console.log("Enemy defeated!");
//         clearInterval(enemyInterval);
//       }
//     }, 1300);
//   };

//   return (
//     <DisplayEnemy
//       NewEnemy={() => Combat(currentEnemy)}
//       currentEnemyData={currentEnemy}
//       enemyMaxHealth={maxHP}
//     />
//   );
// };
