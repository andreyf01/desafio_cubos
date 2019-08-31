import React from 'react';
import classes from './Circle.module.css';

const Popularity = (props) => (
  <div
    className={classes.OuterCircle}
    style={props.style}>
    <div className={classes.InnerCircle} >
      <span>{props.value}</span>
    </div>
  </div>
)

export default Popularity;