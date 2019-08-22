import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { DisplayEnemy } from "../components/DisplayEnemy";
import {
  setEnemyData,
  setCurrentEnemyData,
  setCurrentEnemyHealth
} from "../actions/enemyActions.js";
import { setPlayerData } from "../actions/playerActions.js";
import "./App.css";

// class App extends Component {
const App = () => {
  const eData = useSelector(state => state.dataStates.enemyData);
  const currentEnemy = useSelector(state => state.dataStates.currentEnemyData);
  const pData = useSelector(state => state.dataStates.playerData);
  const currentHealth = useSelector(state => state.dataStates.health);

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

  // playerAttack = () => {
  //   let pDamage = this.state.playerData.map((player, index) => {
  //     return player.playerDamage;
  //   });
  //   this.setState({
  //     enemyHealth: this.state.enemyHealth - pDamage
  //   });
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

  // gainExp = () => {
  //   if (this.state.playerExp >= this.state.levelExp) {
  //     let expOver = 0;

  //     if (this.state.playerExp > this.state.levelExp) {
  //       expOver = this.state.playerExp - this.state.levelExp;
  //     }
  //     this.setState(
  //       {
  //         playerLevel: this.state.playerLevel + 1,
  //         playerExp: 0 + expOver,
  //         levelExp: this.state.levelExp * (this.state.playerLevel + 1)
  //       },
  //       () => {
  //         console.log(
  //           "LEVEL UP! Now level: " +
  //             this.state.playerLevel +
  //             " " +
  //             this.state.levelExp
  //         );
  //       }
  //     );
  //   }
  // };

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
        lootCheck();
        clearInterval(interval);
        setNewEnemy(eData);
      }
    }, 1000);
  };

  const enemySpawner = () => {
    return (
      <DisplayEnemy EnemyData={currentEnemy} EnemyHealth={currentHealth} />
    );
  };
  return (
    <div className="App">
      <div className="ClickUI">
        {enemySpawner()}
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
