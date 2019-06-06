import React, { Component } from "react";
import "./App.css";
import monsters from "./Enemies";

class App extends Component {
  state = {
    playerDamage: 1,
    playerLevel: 1,
    playerExp: 0,
    levelExp: 5,
    killcount: 0,

    enemyDefeated: false,
    enemyHealth: monsters[0].monsterHealth,
    enemyName: monsters[0].monsterName,
    enemyLevel: monsters[0].monsterLevel,
    enemyExp: monsters[0].monsterExp,
    enemyImage: monsters[0].monsterImage
  };

  SpawnMonster = () => {
    let enemyArr = Math.floor(Math.random() * 4);
    return this.setState(
      {
        enemyHealth: monsters[enemyArr].monsterHealth,
        enemyName: monsters[enemyArr].monsterName,
        enemyLevel: monsters[enemyArr].monsterLevel,
        enemyExp: monsters[enemyArr].monsterExp,
        enemyImage: monsters[enemyArr].monsterImage,
        enemyDefeated: false
      },
      () => {
        console.log("Spawning a " + this.state.enemyName + " ID: " + enemyArr);
      }
    );
  };

  DisplayMonster = () => {
    return (
      <div>
        <img
          className="Image"
          src={require(this.state.enemyImage + ".jpg")}
          alt="slime"
          onClick={() => {
            this.setState(
              { enemyHealth: this.state.enemyHealth - this.state.playerDamage },
              () => {
                console.log();
              }
            );
          }}
        />
      </div>
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
    if (this.state.enemyHealth < 1) {
      this.SpawnMonster();
      this.setState(
        {
          killcount: this.state.killcount + 1,
          playerExp: this.state.playerExp + this.state.enemyExp
        },
        () => {
          console
            .log
            // "Monster defeated! Gained: " + this.state.enemyExp + " experience."
            ();
        }
      );
    }
  };

  DisplayPlayerInfo = () => {
    return (
      <div className="PlayerInfo">
        Health: {this.state.enemyHealth}, Kills: {this.state.killcount}, Level:{" "}
        {this.state.playerLevel}, Exp: {this.state.playerExp} /{" "}
        {this.state.levelExp}
      </div>
    );
  };

  render() {
    this.MonsterDefeated();
    this.GainExp();
    return (
      <div className="App">
        <div className="ClickUI">
          <div className="UIHeader">CLICK THE MONSTER TO ATTACK!</div>
          {this.DisplayMonster()}
          {this.DisplayPlayerInfo()}
        </div>
      </div>
    );
  }
}
export default App;
