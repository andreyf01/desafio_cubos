import React from 'react';
import classes from './Movie.module.css';
import MovieInfo from './MovieSummary/MovieSummary';

const movie = (props) => (
  <div className={classes.Movie}>
    <img
      src={props.image}
      alt={props.alt}
      className={classes.Image} />
    <MovieInfo
      movieTitle={props.movieTitle}
      description={props.description} />
  </div>
);

export default movie;