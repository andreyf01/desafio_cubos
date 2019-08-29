import React from 'react';
import classes from './MovieInfo.module.css';
import MovieText from './MovieText/MovieText';

const movieInfo = (props) => (
  <div className={classes.MovieInfo}>
    <MovieText
      overview={props.overview}
      sit={props.sit}
      lang={props.lang}
      dur={props.dur}
      budget={props.budget}
      revenue={props.revenue}
      profit={props.profit}
      score={props.score} />
    <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt={props.alt} />
  </div>
);

export default movieInfo;