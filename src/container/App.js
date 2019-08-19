import React, { Component, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { DisplayEnemy } from "../components/DisplayEnemy";
import {setCurrentEnemyData, setCurrentEnemyComponent} from "../actions/enemyActions"
import "./App.css";



// class App extends Component {
  const App = () => {
  // const pData = useSelector(state => state.dataStates.playerData);
  const eData = useSelector(state => state.dataStates.enemyData);
  const currentEnemy = useSelector(state => state.dataStates.currentEnemyData);
  const enemyComponent = useSelector(state => state.dataStates.displayEnemyComponent);


  const dispatch = useDispatch();


  // componentDidMount() {
  //   this.updatePlayerInfo();
  //   this.enemySpawner();
  // }
  // updatePlayerInfo = () => {
  //   //Map data from state and assign it to variable.
  //   let pInfo = this.state.playerData.map((player, index) => {
  //     return player;
  //   });

  //   let pDamage = pInfo.map(player => {
  //     return player.playerDamage;
  //   });
  //   let pLevel = pInfo.map(player => {
  //     return player.playerLevel;
  //   });
  //   let cExp = pInfo.map(player => {
  //     return player.playerExp;
  //   });
  //   let lExp = pInfo.map(player => {
  //     return player.levelExp;
  //   });

  //   this.setState({
  //     playerDamage: pDamage,
  //     playerLevel: pLevel,
  //     currentExp: cExp,
  //     levelExp: lExp
  //   });
  // };
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

  // enemySpawner = () => {
  //   //Map data from state and assign it to variable.
  //   let eInfo = this.state.enemyData.map((enemy, index) => {
  //     return enemy;
  //   });



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

    const combatStart = (enemyID) =>{
      let eHealth = eData[enemyID].monsterHealth;
      let inCombat = true;
      if(inCombat == true){
        var interval =  setInterval(() => {
            if(eHealth > 0){
              eHealth -= 3;
              console.log("Enemy health: " + eHealth)
            }else{
              console.log("Enemy defeated!");
              inCombat = false;
              clearInterval(interval);
            }
          }, 1000);
    }
  }

    // const enemySpawner = data => {
    //   combatStart(rNum)
    //   console.log("Spawning a: " + data[rNum].monsterName)
    // };

    const setNewEnemy = () => {
      let rNum = Math.round(Math.random() * (eData.length - 1))
      dispatch(setCurrentEnemyData(eData[rNum]))
      dispatch(setCurrentEnemyComponent(<DisplayEnemy EnemyData={currentEnemy}/>))
      // enemySpawner(currentEnemy)
    }
    return (
      <div className="App">
        <div className="ClickUI">
        {enemyComponent}
          <button onClick={() => setNewEnemy()}>FIGHT</button>
        </div>
      </div>
    );
  // }
}
export default connect(
  null,
  null
)(App);