import React, { Component } from "react";
import enemies from "../JSON/Enemies.json";
import player from "../JSON/Player.json";
import { DisplayEnemy } from "../components/DisplayEnemy";
import "./App.css";



class App extends Component {
  state = {
    playerData: player,
    enemyData: enemies,
    enemyDefeated: true,
  };

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
  displayPlayerinfo = () => {
    let data = this.state.playerData.map((player, index) => {
      return (
        <div className="PlayerInfo">
          Kills: {this.state.playerKills}, Level: {this.state.playerLevel}, Exp:{" "}
          {this.state.currentExp} / {this.state.levelExp}
        </div>
      );
    });
    return data;
  };

  enemySpawner = () => {
    //Map data from state and assign it to variable.
    let eInfo = this.state.enemyData.map((enemy, index) => {
      return enemy;
    });

    //Generate a random number
    let enemyArr = Math.floor(Math.random() * eInfo.length + 1);
    if (enemyArr == 0) {
      enemyArr += 1;
    }

    //Filter data based on monsterID's value which is enemyArr
    let randEnemy = eInfo.filter(mob => {
      // console.log(enemyArr);
      return mob.monsterID == enemyArr;
    });

    let enName = randEnemy.map(enemy => {
      return enemy.monsterName;
    });
    let enLevel = randEnemy.map(enemy => {
      return enemy.monsterLevel;
    });
    let enExp = randEnemy.map(enemy => {
      return enemy.monsterExp;
    });
    let enHealth = randEnemy.map(enemy => {
      return enemy.monsterHealth;
    });
    let enImage = randEnemy.map(enemy => {
      return enemy.monsterImage;
    });

    this.setState(
      {
        enemyHealth: enHealth,
        enemyLevel: enLevel,
        enemyExp: enExp,
        enemyImage: enImage + ".jpg",
        enemyName: enName,
        enemyDefeated: false
      },
      console.log("Spawning a " + enName)
    );
  };

  playerAttack = () => {
    let pDamage = this.state.playerData.map((player, index) => {
      return player.playerDamage;
    });
    this.setState({
      enemyHealth: this.state.enemyHealth - pDamage
    });
  };
  // displayEnemy = () => {
  //   return (
  //     <div>
  //       <img
  //         className="Image"
  //         src={require(`../Images/Enemies/slime.jpg`)}
  //         alt="slime"
  //         onClick={this.playerAttack}
  //       />
  //       <div>Enemy Health: {this.state.enemyHealth}</div>
  //       {/* {console.log(
  //         this.state.enemyName + " health: " + this.state.enemyHealth
  //       )} */}
  //     </div>
  //   );
  // };

  killCounter = () => {
    let killNumber = this.state.playerData.map((player, index) => {
      // console.log("counter: "+ player.killcount);
      return player.killcount;
    });

    this.setState({
      // player.killcount: this.state.killcount + 1,
      playerKills: this.state.playerKills + killNumber[0] + 1,
      playerExp: this.state.playerExp + this.state.enemyExp
    });
  };

  gainExp = () => {
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

  render() {
    if (this.state.enemyHealth == 0) {
      this.setState({
        enemyDefeated: true
      });
      this.killCounter();
      this.enemySpawner();
    }

    return (
      <div className="App">
        <div className="ClickUI">
          {/* {this.MonsterDefeated()} */}
          {/* {this.displayEnemy()} */}
          <DisplayEnemy EnemyData={this.state.enemyData[0]}/>
          {/* {console.log(this.enemyInfo().monsterName)} */}
          {/* {this.displayPlayerinfo()} */}
          {/* {this.enemyInfo()} */}

          {/* <div className="UIHeader">CLICK THE MONSTER TO ATTACK!</div> */}
          {/* {this.spawnMonster()} */}
        </div>
      </div>
    );
  }
}
export default App;
