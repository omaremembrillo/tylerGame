import React from 'react';
import classes from './Matrix.css';
import Cell from './Cell/Cell';

const tylerMatrix = (props) => {

    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    const randomCell = 
    (Math.floor(Math.random() * (props.size)) + 1).toString() + 
    (Math.floor(Math.random() * (props.size)) + 1).toString();

    return(
        <div className={classes.tyler_board}>
            <div className={classes.tyler_matrix}>
               { props.grid.map((row, rowId) => { return(
                   <div className={classes.tyler_row} key={"row_"+rowId}>
                    {row.map((cell, cellId) =>{return(
                        <Cell key={"cell_"+rowId+cellId}
                        size={props.size}
                        color={randomColor}
                        opacity={randomCell === ((cellId + 1).toString() + (rowId + 1).toString()) ? 0.8 : 1}
                        clickCell={() => props.clickCell(randomCell,((cellId + 1).toString() + (rowId + 1).toString()))}/>
                    )})}
                   </div>
                )})}
            </div>
        </div>
    );
};

export default tylerMatrix;