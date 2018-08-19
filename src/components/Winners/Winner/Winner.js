import React from 'react';

import classes from './Winner.css';

const tylerWinner = (props) => {

    return (
      <div>
          <h1 className={classes.name}>{props.name}</h1>
          <p className={classes.score}>{props.score} puntos</p>
      </div>
    );
}

export default tylerWinner;