import React from 'react';
import classes from './Cell.css';

const tylerCell = (props) => {
    const style = {
      backgroundColor: props.color,
      opacity: props.opacity,
      width: 'calc(400px/'+props.size+')',
      height: 'calc(400px/'+props.size+')'
    }

    return (
      <div className={classes.tyler_cell} 
        onClick={props.clickCell}
        style={style}
        >
      </div>
    );
}

export default tylerCell;