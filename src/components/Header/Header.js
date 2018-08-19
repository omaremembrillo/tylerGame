import React from 'react';
import classes from '../../index.css';

const header = (props) => {
    let score_text = "Comienza a Jugar";
    
    if(props.score > 0 )
      score_text = "Puntaje: " + props.score;
    
    return (
      <div className={classes.text_center}>
        <h1> Tyler Game </h1>
        <p> {score_text} </p>
      </div>
    );
}

export default header;