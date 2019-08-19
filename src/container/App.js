import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { DisplayEnemy } from "../components/DisplayEnemy";
import {setEnemyData, setCurrentEnemyData} from "../actions/enemyActions.js"
import {setPlayerData} from "../actions/playerActions.js"
import "./App.css";



// class App extends Component {
  const App = () => {
  const eData = useSelector(state => state.dataStates.enemyData);
  const currentEnemy = useSelector(state => state.dataStates.currentEnemyData);
  const pData = useSelector(state => state.dataStates.playerData);
  const currentHealth = useSelector(state => state.dataStates.health)


  const dispatch = useDispatch();

    useEffect(() => dispatch(setEnemyData), [])
    useEffect(() => setNewEnemy(eData), [])
    useEffect(() => setPlayerData(pData), [])

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

    const combatStart = (cEnemy) =>{
      let eHealth = cEnemy.monsterHealth;
      let inCombat = true;
      if(inCombat == true){
        var interval =  setInterval(() => {
            if(eHealth > 0){
              eHealth -= pData.playerDamage + 4;
              console.log("Enemy health: " + eHealth)
            }else if (eHealth <= 0){
              let rNum = Math.round(Math.random() * 10)
              console.log(rNum)
              console.log("Enemy defeated!");
              if(rNum <= 2){
                console.log("Found a rare item!")
              }
              inCombat = false;
              clearInterval(interval);
              setNewEnemy(eData)
            }
          }, 1000);
    }
  }

    const enemySpawner = () => {
      return  <DisplayEnemy EnemyData={currentEnemy}/>
    };

    const setNewEnemy = (fullEnemyData) => {
      let rNum = Math.round(Math.random() * (fullEnemyData.length - 1))
      dispatch(setCurrentEnemyData(fullEnemyData[rNum]))

      dispatch({type: "UPDATE_ENEMY_HEALTH"})
    }

    return (
      <div className="App">
        <div className="ClickUI">
          {enemySpawner()}
          <button onClick={() => combatStart(currentEnemy)}>FIGHT</button>
        </div>
      </div>
    );
  // }
}
export default connect(
  null,
  null
)(App);