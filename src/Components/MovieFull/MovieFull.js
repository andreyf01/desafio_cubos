import React from 'react';
import classes from './MovieFull.module.css';
import MovieInfo from './MovieDetail/MovieDetail';

const movieDetail = (props) => (
  <div className={classes.MovieDetail}>
    <h2>{props.movieTitle}</h2>
    <MovieInfo
      image={props.image}
      alt={props.alt}
      description={props.description}
      sit={props.sit}
      lang={props.lang}
      dur={props.dur}
      budget={props.budget}
      receipt={props.receipt}
      profit={props.profit}
      score={props.score} />
  </div>
);

export default movieDetail;