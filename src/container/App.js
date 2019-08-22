import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { DisplayEnemy } from "../components/DisplayEnemy";
import { DisplayPlayer } from "../components/DisplayPlayer";

import {setEnemyData, setCurrentEnemyData, setCurrentEnemyHealth} from "../actions/enemyActions.js";
import { setPlayerData, setPlayerLevel, setPlayerCurrentExp } from "../actions/playerActions.js";
import "./App.css";

// class App extends Component {
const App = () => {
  const eData = useSelector(state => state.enemyStates.enemyData);
  const currentEnemy = useSelector(state => state.enemyStates.currentEnemyData);
  const currentEnemyHealth = useSelector(state => state.enemyStates.health);

  const pData = useSelector(state => state.playerStates.playerData);
  const currentPlayerHealth = useSelector(state => state.playerStates.playerHealth);
  const currentExp = useSelector(state => state.playerStates.playerExp);
  const reqExp = useSelector(state => state.playerStates.levelExp);
  const currentLevel = useSelector(state => state.playerStates.playerLevel);


  const dispatch = useDispatch();

  useEffect(() => setEnemyData(), []);
  useEffect(() => setNewEnemy(eData), []);
  useEffect(() => setPlayerData(pData), []);

  // displayPlayerinfo = () => {
  //   let data = this.state.playerData.map((player, index) => {
  //     return (
  //       <div className="PlayerInfo">
  //         Kills: {this.state.playerKills}, Level: {this.state.playerLevel}, Exp:{" "}
  //         {this.state.currentExp} / {this.state.levelExp}
  //       </div>
  //     );
  //   });
  //   return data;
  // };


  // killCounter = () => {
  //   let killNumber = this.state.playerData.map((player, index) => {
  //     // console.log("counter: "+ player.killcount);
  //     return player.killcount;
  //   });

  //   this.setState({
  //     // player.killcount: this.state.killcount + 1,
  //     playerKills: this.state.playerKills + killNumber[0] + 1,
  //     playerExp: this.state.playerExp + this.state.enemyExp
  //   });
  // };

 const gainExp = (exp) => {
    console.log("Gained experience: " + exp)
    //console.log(Math.floor(5/2))
    let sumExp = exp + currentExp
    dispatch(setPlayerCurrentExp(sumExp))

    if(sumExp >= reqExp){
      let expOver = sumExp - reqExp
      gainLevel(1);
      dispatch(setPlayerCurrentExp(expOver))
      //Set new max exp
      //Set up over exp for multiple levels
    }
  }

const  gainLevel = (level) => {
   let sum = currentLevel + level
    dispatch(setPlayerLevel(sum));
  }


  const setNewEnemy = fullEnemyData => {
    let rNum = Math.round(Math.random() * (fullEnemyData.length - 1));
    dispatch(setCurrentEnemyData(fullEnemyData[rNum]));
    document.getElementById("fightBtn").disabled = false;
  };

  const lootCheck = () => {
    let rNum = Math.round(Math.random() * 10);
    if (rNum <= 2) {
      console.log("Found a rare item!");
    }
  };

  const playerAttack = () => {
    let dmgVariance = Math.round(Math.random() * 3);
    let missChance = Math.round(Math.random() * 100);

    if (missChance > 10) {
      // console.log("Damage dealt: " + (pData.playerDamage + dmgVariance));
      return pData.playerDamage + dmgVariance;
    } else {
      console.log("Missed!");
      return 0;
    }
  };
  const combatStart = () => {
    let eHealth = currentEnemy.monsterHealth;
    document.getElementById("fightBtn").disabled = true;
    var interval = setInterval(() => {
      if (eHealth > 0) {
        eHealth -= playerAttack();
        dispatch(setCurrentEnemyHealth(eHealth));
        // console.log("current monster health: " + eHealth);
      } else if (eHealth <= 0) {
        console.log("Enemy defeated!");
        gainExp(currentEnemy.monsterExp)
        lootCheck();
        clearInterval(interval);
        setNewEnemy(eData);
      }
    }, 1000);
  };

  const enemyDisplay = () => {
    return (
      <DisplayEnemy EnemyData={currentEnemy} EnemyHealth={currentEnemyHealth} />
    );
  };

  const playerDisplay = () => {
    return (
      <DisplayPlayer PlayerData={pData} PlayerHealth={currentPlayerHealth}/>
    );
  };


  return (
    <div className="App">
      <div className="ClickUI">
        {enemyDisplay()}
        {playerDisplay()}
        <button id="fightBtn" onClick={() => combatStart(currentEnemy)}>
          FIGHT
        </button>

      </div>
    </div>
  );
};
export default connect(
  null,
  null
)(App);
