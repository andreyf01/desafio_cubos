import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
  return (
    <div className={classes.Cockpit}>
      <h1 onClick={() => props.clicked()} >Movies</h1>
    </div>
  )
}

export default cockpit;