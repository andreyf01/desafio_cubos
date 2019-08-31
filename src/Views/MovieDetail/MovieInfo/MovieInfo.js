import React from 'react';
import classes from './MovieInfo.module.css';

const MovieInfo = ({ heading, value }) => {
  return (
    <div>
      <h4 className={classes.Heading}>{heading}</h4>
      <span className={classes.Value}>{value}</span>
    </div>
  );
}

export default MovieInfo;