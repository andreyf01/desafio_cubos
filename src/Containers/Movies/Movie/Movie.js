import React from 'react';
import classes from './Movie.module.css';

const movie = (props) => (
  <div className={classes.Movie}>
    <img src={props.image} alt={props.alt} className={classes.Image} />
    <h2 className={classes.MovieTitle}>{props.movieTitle}</h2>
    <div className={classes.Description}>{props.description}</div>
    Tags
  </div>
);

export default movie;