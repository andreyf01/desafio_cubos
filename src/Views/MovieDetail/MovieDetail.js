import React, { useEffect, useState } from 'react';
import classes from './MovieDetail.module.css';

import Tag from '../../Components/Tag/Tag';
import Circle from '../../Components/Circle/Circle';
import MovieInfo from './MovieInfo/MovieInfo';

import { API, API_KEY, IMG } from '../../helpers/constants';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);

  const convertToCurrency = (value) => value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const getMovie = async () => {
    try {
      const rawResponse = await fetch(`${API}movie/${match.params.id}?api_key=${API_KEY}&language=pt-BR`);
      const response = await rawResponse.json();
      setMovie(response);
      const getMovieTrailer = await fetch(`${API}movie/${match.params.id}/videos?api_key=${API_KEY}`);
      const movieTrailers = await getMovieTrailer.json();
      if (movieTrailers.results.length > 0)
        setTrailer(movieTrailers.results[0].key);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (loading) return <div>Carregando...</div>;

  const tags = movie.genres.map(genre => (
    <Tag key={genre.id} name={genre.name} />
  ));

  const popStyle = {
    width: '100px',
    height: '100px',
    fontSize: '2.6em'
  }

  const formattedDate = new Date(movie.release_date).toLocaleDateString("pt-BR");

  return (
    <div>
      <div className={classes.Heading}>
        <h2 className={classes.Title}>{movie.title}</h2>
        <span className={classes.Date}>{formattedDate}</span>
      </div>
      <div className={classes.Container}>
        <div className={[classes.DetailContainer, classes.Overview].join(' ')}>
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
        </div>
        <div className={[classes.DetailContainer, classes.InfoContainer].join(' ')}>
          <h3>Informações</h3>
          <div className={classes.Info}>
            <MovieInfo heading="Situacao" value={movie.status} />
            <MovieInfo heading="Idioma" value={movie.original_language} />
            <MovieInfo heading="Duração" value={movie.runtime} />
            <MovieInfo heading="Orçamento" value={convertToCurrency(movie.budget)} />
            <MovieInfo heading="Receita" value={convertToCurrency(movie.revenue)} />
            <MovieInfo heading="Lucro" value={convertToCurrency(movie.revenue - movie.budget)} />
          </div>
        </div>
        <div className={[classes.DetailContainer, classes.Stats].join(' ')}>
          <div>{tags}</div>
          <Circle style={popStyle} value={Math.round(movie.popularity) + '%'} />
        </div>
        <div className={classes.Poster}>
          <img src={`${IMG}${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className={classes.VideoContainer}>
          <iframe
            className={classes.Video}
            title={movie.title}
            id="ytplayer"
            type="text/html"
            src={`https://www.youtube.com/embed/${trailer}`}
            frameborder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;