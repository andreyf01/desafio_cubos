import React from 'react';
import classes from './MovieSummary.module.css';

const movieSummary = (props) => {
  const { titleClick, movieTitle, overview, tagNames, tags, buttonClick } = props;
  return (
    <div className={classes.MovieInfo}>
      <h2 onClick={titleClick}>{movieTitle}</h2>
      <p>{overview}</p>
      {tags.map(tag => (
        <button
          className={classes.tags}
          key={tag}
          onClick={buttonClick}>
          {tagNames[tag]}
        </button>
      ))}
    </div>
  );
};

export default movieSummary;