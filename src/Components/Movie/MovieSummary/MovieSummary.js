import React from 'react';
import classes from './MovieSummary.module.css';

const movieSummary = (props) => {
  const { click, movieTitle, overview, tagNames, tags } = props;
  return (
    <div className={classes.MovieInfo}>
      <h2 onClick={click}>{movieTitle}</h2>
      <p>{overview}</p>
      {tags.map(tag => (
        <button
          className={classes.tags}
          key={tag}>
          {tagNames[tag]}
        </button>
      ))}
    </div>
  );
};

export default movieSummary;