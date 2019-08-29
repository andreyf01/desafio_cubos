import React, { useEffect, useState } from 'react';
import Movie from '../../Components/Movie/Movie';
import MovieFull from '../../Components/MovieFull/MovieFull';
//import classes from './MovieList.module.css';


const MovieList = (props) => {
  const { movies, visible, clicked, genres, expand, movieDetails } = props;
  const [isVisible, setVisibility] = useState(null);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);



  /*useEffect(() => {
    setVisibility(true);
  }, [movies])*/

  /*expandMovie = (movieIndex) => {
    const movieId = movies[movieIndex].id;
    getMovie(movieId);
    return (
      <MovieFull />
    )
  }*/
  if (expand) {
    return (
      <MovieFull
        image={movieDetails.poster_path}
        alt={movieDetails.title}
        overview={movieDetails.overview}
        sit={movieDetails.status}
        lang={movieDetails.original_language}
        dur={movieDetails.runtime}
        budget={movieDetails.budget}
        revenue={movieDetails.revenue}
        profit={movieDetails.profit}
        score={movieDetails.popularity} />
    )
  } else if (isVisible) {
    if (movies.length === 0) {
      return (<h2>Não houve resultados para essa busca.</h2>);
    } else {
      return (
        <div>
          {movies.map((mov, index) => (
            <Movie
              key={mov.id}
              src={mov.poster_path}
              id={mov.id}
              movieTitle={mov.title}
              overview={mov.overview}
              popularity={mov.popularity}
              releaseDate={mov.release_date}
              tags={mov.genre_ids}
              genres={genres}
              click={() => clicked(index)} />
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