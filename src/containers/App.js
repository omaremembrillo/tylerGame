import React, { Component } from 'react';

import classes from '../index.css';

import Header from '../components/Header/Header';
import Game from './Game';
import Winners from '../components/Winners/Winners';
import Form from '../components/Form/Form';
import Fail from '../components/Form/Fail';

class App extends Component {
  state = {
    score : 0,
    winners : [],
    winnerName: "Jon Doe",
    isWinner: false,
    showFailView: false
  }

  sortHandler = (array) => array.sort(function(a,b) {return (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0);} );
  
  failHandler = () => {
    this.setState({showFailView: false});
  }

  addWinnerHandler = () => {
    const winnersLength = this.state.winners.length;
    const newWinners = [...this.state.winners];
    if(winnersLength < 5){
      newWinners.push({name:this.state.winnerName ,score:this.state.score});
    }else{
      newWinners[winnersLength-1].name = this.state.winnerName;
      newWinners[winnersLength-1].score = this.state.score;
    }
    this.setState({winners: newWinners});
    this.setState({score: 0});
    this.setState({isWinner: false});
    // localStorage.setItem("listWinners",JSON.stringify(newWinners));
  }

  scoreHandler = (addScore) => {
    if (addScore === 0){
      if(this.state.score > 0){
        const winnersLength = this.state.winners.length;
        if(winnersLength < 5){
          this.setState({isWinner: true});
        }else if(this.state.winners[winnersLength-1].score <= this.state.score){
          this.setState({isWinner: true});
        } else {
          this.setState({score: 0});
          this.setState({showFailView: true});
        }
      } 
    }
    else{
      const newScore = this.state.score + addScore;
      this.setState({score: newScore});
    }
  }

  getNameHandler = (evt) => {
    this.setState({winnerName: evt.target.value});
  }

  getLocalStorageListWinnersHandler = () => {
    const key = "listWinners";
    if(localStorage.hasOwnProperty(key)){
      let listWinners = localStorage.getItem(key);
      this.setState({winners : JSON.parse(listWinners)});
    }
  }

  setLocalStorageListWinnersHandler = () => {
    const key = "listWinners";
    localStorage.setItem(key,JSON.stringify(this.state.winners));
  }

  componentDidMount() {
    this.getLocalStorageListWinnersHandler();

    window.addEventListener(
      "beforeunload",
      this.setLocalStorageListWinnersHandler.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.setLocalStorageListWinnersHandler.bind(this)
    );

    this.setLocalStorageListWinnersHandler();
  }

  render () {
    this.sortHandler(this.state.winners);
    let form = null;
    let winnersList = null;

    if(this.state.isWinner){
      form = <div className={classes.form_cover}>
        <Form score={this.state.score} 
        change={this.getNameHandler} 
        click={this.addWinnerHandler} />
      </div>
    }

    if(this.state.showFailView){
      form = <div className={classes.form_cover}>
        <Fail click={this.failHandler} />
      </div>
    }

    if(this.state.winners.length > 0){
      winnersList = <div className={classes.winners_container}>
      <h1 style={{textAlign:'center'}}>TOP PUNTAJES</h1>
      <Winners winners={this.state.winners}/>
      </div>
    }

    return (
      <div>
        <div>
            <Header score={this.state.score} />
            <div>
              <div className={classes.game_container}>
                <Game newScore={this.scoreHandler} newWinner={this.addWinnerHandler}/>
              </div>
              {winnersList}
            </div>
        </div>
        {form}
      </div>
    );
  }
}

export default App;
