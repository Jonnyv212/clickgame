import React, { Component } from "react";
import "./App.css";
import enemies from "./Enemies.json";
import player from "./Player.json";
import monsters from "./Enemies.json";

class App extends Component {
  state = {
    playerData: player,
    enemyData : enemies,
    enemyDefeated: false,
    enemyHealth: 0,
    enemyImage: []
  };

    displayPlayerinfo = () => {
    let data =  this.state.playerData.map((player, index) =>{
        return (
          <div className="PlayerInfo">
            Kills: {player.killcount}, Level:{" "}
            {player.playerLevel}, Exp: {player.playerExp} /{" "} {player.playerLevel},
            {" "} Level: {player.playerLevel}
          </div>);
      })
      return data;
    }

  enemyInfo = () => {
    //Generate a random number
    let enemyArr = Math.floor(Math.random() * 4);
    //Map data from state and assign it to variable.
    let eInfo = this.state.enemyData.map((enemy, index) =>{
      return(enemy)
    })
    //Filter data based on monsterID's value which is enemyArr
    let randEnemy = eInfo.filter(mob => {
      console.log(enemyArr)
      return mob.monsterID == enemyArr
    });
    
    return randEnemy;
    // this.setState(
    //   {
    //     // enemyHealth: monsters[enemyArr].monsterHealth,
    //     // enemyName: monsters[enemyArr].monsterName,
    //     // enemyLevel: monsters[enemyArr].monsterLevel,
    //     // enemyExp: monsters[enemyArr].monsterExp,
    //     // enemyImage: monsters[enemyArr].monsterImage,

    //     enemyDefeated: false
    //   },
    //   () => {
    //     console.log("Spawning a " + this.state.enemyName + " ID: " + enemyArr);
    //   }
    // );
  };


  spawnMonster = () => {
    let getEnemyInfo = this.enemyInfo();
    this.setState({ enemyHealth: getEnemyInfo.monsterHealth, 
      enemyImage: getEnemyInfo.monsterImage,
      enemyDefeated: false});
    return (
        <img
          className="Image"
          src={require("./Images/Enemies/slime" + ".jpg")}
          alt="slime"
          onClick={console.log("Clicked" + this.state.enemyHealth)}
        />
    );
  };

  GainExp = () => {
    if (this.state.playerExp >= this.state.levelExp) {
      let expOver = 0;

      if (this.state.playerExp > this.state.levelExp) {
        expOver = this.state.playerExp - this.state.levelExp;
      }
      this.setState(
        {
          playerLevel: this.state.playerLevel + 1,
          playerExp: 0 + expOver,
          levelExp: this.state.levelExp * (this.state.playerLevel + 1)
        },
        () => {
          console.log(
            "LEVEL UP! Now level: " +
              this.state.playerLevel +
              " " +
              this.state.levelExp
          );
        }
      );
    }
  };

  MonsterDefeated = () => {
    console.log("currently: " + this.state.enemyHealth)
    if (this.state.enemyHealth < 1) {
      //  this.spawnMonster();
      // this.setState(
      //   {
      //     killcount: this.state.killcount + 1,
      //     playerExp: this.state.playerExp + this.state.enemyExp
      //   },
      //   () => {
      //     console
      //       .log
      //       // "Monster defeated! Gained: " + this.state.enemyExp + " experience."
      //       ();
      //   }
      // );
    }
  };

  render() {
    // this.GainExp();
    return (
      <div className="App">
        <div className="ClickUI">
        {/* {this.MonsterDefeated()} */}
          {/* {console.log(this.enemyInfo().monsterName)} */}
          <div>{this.displayPlayerinfo()}</div>
          {console.log(this.enemyInfo())}
          
          {/* <div className="UIHeader">CLICK THE MONSTER TO ATTACK!</div> */}
          {/* {this.spawnMonster()} */}
        </div>
      </div>
    );
  }
}
export default App;
