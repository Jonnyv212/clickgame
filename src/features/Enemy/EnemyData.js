import React from "react";
import {
  setCurrentEnemyData,
  setCurrentEnemyHealth
} from "../../redux/actions/enemyActions";
import { setCombat } from "../../redux/actions/combatActions";
// import { setCurrentPlayerHealth } from "../../redux/actions/playerActions";
import { DisplayEnemy } from "./DisplayEnemy";
import { connect } from "react-redux";
import {compose, withState, lifecycle} from "recompose"


 const EnemyData = ({
  combatReady,
  setTheCombat,
  fullEnemyData,
  setFullEnemyData,
  currentEnemyData,
  setCurrentEnemyData,
  setCurrentEnemyHealth,
  currentEnemyHealth
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
    setCurrentEnemyData(fullEnemyData);
    console.log("Spawning: " + fullEnemyData[rNum].monsterName);
  };


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

  const beginCombat = () => {
    let enemyHP = currentEnemyHealth;
    
    const combatInterval = setInterval(() => {
      if (enemyHP > 0) {
        console.log(enemyHP);
        enemyHP = enemyHP - 5;
        setCurrentEnemyHealth(enemyHP);
      } else if (enemyHP <= 0) {
        setNewEnemy(fullEnemyData)
        clearInterval(combatInterval);
      }
    }, 1000);
  };

  return (
    <DisplayEnemy
      NewEnemy={beginCombat}
      currentEnemyData={currentEnemyData}
      enemyMaxHealth={currentEnemyData.monsterHealth}
    />
  );
};

const mapStateToProps = (state) => ({
  fullEnemyData: state.enemyStates.enemyData,
  currentEnemyData: state.enemyStates.currentEnemyData,
  currentEnemyHealth: state.enemyStates.currentEnemyData.monsterHealth
});

const mapDispatchToProps = dispatch => {
  return {
    setCurrentEnemyData: event => dispatch(setCurrentEnemyData(event)),
    setCurrentEnemyHealth: event => dispatch(setCurrentEnemyHealth(event))
  };
};

export default compose(
  connect(
  mapStateToProps,
  mapDispatchToProps
), 
lifecycle({
  componentDidMount(){
     this.props.setCurrentEnemyData(this.props.fullEnemyData)
  }
}),
withState('combatReady', 'setCombatReady', true)
)(EnemyData);
