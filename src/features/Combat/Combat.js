// import { connect } from "react-redux";
// import { setCombat } from "../../redux/actions/combatActions";
// import React from "react";

// const Combat = ({ theCombat, setTheCombat }) => {
//   // let eHealth = enemyData.monsterHealth;/
//   // let pHealth = fullPlayerData.playerHealth;
//   console.log("Calling combat to change state");
//   setTheCombat(true);
//   // var enemyInterval = setInterval(() => {
//   //   console.log(theCombat);
//   //   if (theCombat == true) {
//   //     // console.log(theCombat);
//   //     updateEnemyHealth();
//   //   } else if (theCombat == false) {
//   //     console.log("We got here");
//   //     clearInterval(enemyInterval);
//   //     // setNewEnemy(fullEnemyData);
//   //   }
//   // }, 1300);

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

// const mapStateToProps = (state, ownProps) => ({
//   theCombat: state.combatStates.combat
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     setTheCombat: event => dispatch(setCombat(event))
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Combat);
