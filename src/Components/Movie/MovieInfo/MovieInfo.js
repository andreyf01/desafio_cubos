import React from 'react';
import classes from './MovieInfo.module.css';

const movieInfo = (props) => (
  <div className={classes.MovieInfo}>
    <h2>{props.movieTitle}</h2>
    <p>{props.description}</p>
    <button className={classes.tags}>Tags</button>
  </div>
);

export default movieInfo;