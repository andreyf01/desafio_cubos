import React from 'react';
import classes from './MovieDetail.module.css';
import MovieInfo from './MovieInfo/MovieInfo';

const MovieDetail = (props) => (
  <div className={classes.MovieDetail}>
    <h2>{props.movieTitle}</h2>
    <MovieInfo
      image={props.image}
      alt={props.alt}
      overview={props.overview}
      sit={props.sit}
      lang={props.lang}
      dur={props.dur}
      budget={props.budget}
      revenue={props.revenue}
      profit={props.profit}
      score={props.score} />
  </div>
);

export default MovieDetail;