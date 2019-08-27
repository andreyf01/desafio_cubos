import React from 'react';
import classes from './MovieInfo.module.css';

const movieInfo = (props) => (
  <div className={classes.MovieInfo}>
    <h2>{props.movieTitle}</h2>
    <p>{props.description}</p>
    Tags
  </div>
);

export default movieInfo;