import React from 'react';
import classes from './Movie.module.css';
import MovieSummary from './MovieSummary/MovieSummary';
//import genres from '../../genre_list.json';

const movie = (props) => {
  const { src, id, movieTitle, overview, popularity, releaseDate, tags, titleClick, genres, buttonClick } = props;

  return (
    <div className={classes.Movie}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${src}`}
        alt={id}
        className={classes.Image} />
      <MovieSummary
        movieTitle={movieTitle}
        overview={overview}
        releaseDate={releaseDate}
        tags={tags}
        popularity={popularity}
        buttonClick={buttonClick}
        titleClick={titleClick}
        tagNames={genres} />
    </div>
  );
};

export default movie;