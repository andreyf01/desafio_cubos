import React, { useEffect, useState } from 'react';
import classes from './MovieDetail.module.css';

import Tag from '../../Components/Tag/Tag';
import Circle from '../../Components/Circle/Circle';

import { API, API_KEY, IMG } from '../../helpers/constants';

const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    try {
      const rawResponse = await fetch(`${API}movie/${match.params.id}?api_key=${API_KEY}&language=pt-BR`);
      const response = await rawResponse.json();
      setMovie(response);
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

  return (
    <div>
      <div className={classes.Heading}>
        <h2 className={classes.Title}>{movie.title}</h2>
        <span className={classes.Date}>{movie.release_date}</span>
      </div>
      <div className={classes.Container}>
        <div className={[classes.DetailContainer, classes.Overview]}>
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
        </div>
        <div className={[classes.DetailContainer, classes.InfoContainer]}>
          <h3>Informações</h3>
          <div className={classes.Info}>
            <p>I1</p>
            <p>I2</p>
            <p>I3</p>
            <p>I4</p>
            <p>I5</p>
            <p>I6</p>
          </div>
        </div>
        <div className={[classes.DetailContainer, classes.Stats]}>
          <Circle style={popStyle} value={movie.popularity} />
          <div>{tags}</div>
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
            src={`https://www.youtube.com/embed/`}
            frameborder="0"></iframe>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;