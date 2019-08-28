import React from 'react';
import classes from './MovieSummary.module.css';

const movieInfo = (props) => (
  <div className={classes.MovieInfo}>
    <h2>{props.movieTitle}</h2>
    <p>{props.overview}</p>
    <button className={classes.tags}>{props.tags}</button>
  </div>
);

export default movieInfo;