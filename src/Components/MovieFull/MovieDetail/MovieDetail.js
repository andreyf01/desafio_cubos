import React from 'react';
import classes from './MovieDetail.module.css';
import MovieText from './MovieText/MovieText';

const movieInfo = (props) => (
  <div className={classes.MovieInfo}>
    <MovieText
      description={props.description}
      sit={props.sit}
      lang={props.lang}
      dur={props.dur}
      budget={props.budget}
      receipt={props.receipt}
      profit={props.profit}
      score={props.score} />
    <img src={props.image} alt={props.alt} />
  </div>
);

export default movieInfo;