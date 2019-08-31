import React from 'react';
import classes from './Movie.module.css';
import { Link } from 'react-router-dom';

import Circle from '../../../Components/Circle/Circle';
import Tag from '../../../Components/Tag/Tag';


import { IMG } from '../../../helpers/constants';
import tagNames from '../../../helpers/tagNames.json';


const Movie = ({ movie }) => {
  const tags = movie.genre_ids.map(id => (
    <Tag key={id} name={tagNames[id]} id={id} />
  ));

  const popStyle = {
    width: '75px',
    height: '75px',
    fontSize: '2.2em'
  };

  const formattedDate = new Date(movie.release_date).toLocaleDateString("pt-BR");

  return (
    <div className={classes.Movie}>
      <div className={classes.Poster}>
        <img src={`${IMG}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className={classes.Title}>
        <div className={classes.Popularity}>
          <Circle
            value={Math.round(movie.popularity) + '%'}
            style={popStyle}
          />
        </div>
        <div className={classes.Container}><Link className={classes.TitleLink} to={`/movie/${movie.id}`}>
          <h2>{movie.title}</h2>
        </Link>
          <span className={classes.Date}>{formattedDate}</span>
        </div>
      </div>
      <div className={classes.Summary}>
        <p>{movie.overview}</p>
        <div>{tags}</div>
      </div>
    </div>
  )
}

export default Movie;