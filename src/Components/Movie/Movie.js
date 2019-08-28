import React from 'react';
import classes from './Movie.module.css';
import MovieSummary from './MovieSummary/MovieSummary';

const movie = (props) => {
  const {
    src,
    alt,
    movieTitle,
    overview,
    popularity,
    releaseDate,
    tags } = props;

  console.log(src);

  return (
    <div className={classes.Movie}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${src}`}
        alt={alt}
        className={classes.Image} />
      <MovieSummary
        movieTitle={movieTitle}
        overview={overview}
        releaseDate={releaseDate}
        tags={tags}
        popularity={popularity} />
    </div>
  );
};

export default movie;