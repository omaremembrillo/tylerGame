import React from 'react';

import classes from './Form.css';

const tylerForm = (props) => {
    const style = {
        fontSize: '20px',
        width: '220px',
        height: '55px'
    }

    return (
      <div className={classes.form_container}>
        <h1>Haz perdido !</h1>
        <button className={classes.form_button} type="button" 
        onClick={props.click} 
        style={style}>Volver a intentarlo</button>
      </div>
    );
}

export default tylerForm;