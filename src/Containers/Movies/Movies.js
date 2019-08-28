import React /*{ useEffect, useState }*/ from 'react';
import Movie from '../../Components/Movie/Movie';
import MovieFull from '../../Components/MovieFull/MovieFull';
import classes from './Movies.module.css';


const movieList = (props) => {
  const { movies, showResults } = props;

  if (showResults) {
    if (movies.length === 0) {
      return (<h2>Não houve resultados para essa busca.</h2>);
    } else {
      return (
        <div>
          <Movie
            src={movies.poster_path}
            alt={movies.id}
            movieTitle={movies.title}
            overview={movies.overview}
            popularity={movies.popularity}
            releaseDate={movies.release_date}
            tags={movies.genre_ids}
          />
          Pages
        </div>
      );
    }
  }

  //poster_path, id, title, overview, popularity, release_date, genre_ids

  return (
    <div className={classes.MovieList} >
      <Movie
      />
      Pages
    </div>
  );
};

export default movieList;