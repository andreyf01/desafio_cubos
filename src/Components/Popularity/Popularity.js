import React from 'react';
import classes from './Popularity.module.css';

const Popularity = (props) => (
  <div className={classes.OuterCircle}>
    <div className={classes.InnerCircle}>
      <span>{Math.round(props.popularity)}</span>
    </div>
  </div>
)

export default Popularity;