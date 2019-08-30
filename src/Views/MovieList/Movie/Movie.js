import React from 'react';
import classes from './Movie.module.css';

import Popularity from '../../../Components/Popularity/Popularity';
import Tag from '../../../Components/Tag/Tag';

import { IMG } from '../../../helpers/constants';
import tagNames from '../../../helpers/tagNames.json';


const Movie = ({ movie }) => {

  const tags = movie.genre_ids.map(id => (
    <Tag key={id} name={tagNames[id]} />
  ));

  const popStyle = {
    width: '75px',
    height: '75px',
    fontSize: '2.2em'
  };

  return (
    <div className={classes.Movie}>
      <img className={classes.Poster} src={`${IMG}${movie.poster_path}`} alt={movie.title} />
      <div className={classes.Title}>
        <h2>{movie.title}</h2>
        <div className={classes.Popularity}>
          <Popularity
            popularity={movie.popularity}
            style={popStyle}
          />
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