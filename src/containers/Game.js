import React, { PureComponent } from 'react';

import Matrix from '../components/Matrix/Matrix';

class Game extends PureComponent {

  constructor(props){
      super(props);
      this.state = {
        size: 2,
        grid: Array(2).fill(0).map(x=>Array(2).fill(" "))
      }

  }
  

  resetGameHandler = () => {
    this.props.newScore(0);
    this.setState({size: 2});
    this.setState({grid: Array(2).fill(0).map(x=>Array(2).fill(" "))});
  }

  cellClickHandler = (idGanador,idCell) => {
        if(idGanador === idCell){
            const addScore = this.state.size*100;
            this.props.newScore(addScore);

            const newSize = this.state.size + 1;
            this.setState({size: newSize});

            const newGrid = Array(newSize).fill(0).map(x=>Array(newSize).fill(" "));
            this.setState({grid: newGrid});
        }
        else{
            this.resetGameHandler();
        }
  }

  render () {
    

    return (
        <Matrix size={this.state.size} 
        grid={this.state.grid} 
        clickCell={this.cellClickHandler}/>
    );
  }
}

export default Game;
