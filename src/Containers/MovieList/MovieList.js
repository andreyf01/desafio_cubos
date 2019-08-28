import React, { useEffect, useState } from 'react';
import Movie from '../../Components/Movie/Movie';
import MovieFull from '../../Components/MovieFull/MovieFull';
import classes from './MovieList.module.css';


const MovieList = (props) => {
  const { movies, visible } = props;
  const [isVisible, setVisibility] = useState(null);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);

  console.log(movies);

  /*useEffect(() => {
    setVisibility(true);
  }, [movies])*/

  if (isVisible) {
    if (movies.length === 0) {
      return (<h2>Não houve resultados para essa busca.</h2>);
    } else {
      return (
        <div>
          {movies.map(mov => (
            <Movie
              key={mov.id}
              src={mov.poster_path}
              alt={mov.id}
              movieTitle={mov.title}
              overview={mov.overview}
              popularity={mov.popularity}
              releaseDate={mov.release_date}
              tags={mov.genre_ids}
            />
          ))}
          Pages
        </div>
      );
    }
  } else {
    return (null);
  }

  //poster_path, id, title, overview, popularity, release_date, genre_ids
};

export default MovieList;