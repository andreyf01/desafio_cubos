import React from 'react';
import classes from './MovieFull.module.css';
import MovieDetail from './MovieDetail/MovieDetail';

const movieDetail = (props) => (
  <div className={classes.MovieDetail}>
    <h2>{props.movieTitle}</h2>
    <MovieDetail
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

export default movieDetail;