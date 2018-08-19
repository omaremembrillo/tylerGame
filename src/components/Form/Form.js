import React from 'react';

import classes from './Form.css';

const tylerForm = (props) => {

    return (
      <div className={classes.form_container}>
          <h1>Tu puntaje fue: {props.score}</h1>
          <p>Agrega tu nombre a la lista de ganadores</p>
          <input className={classes.form_input} type="text" onChange={props.change} /> <br />
          <button className={classes.form_button} type="button" onClick={props.click} >Agregar</button>
      </div>
    );
}

export default tylerForm;