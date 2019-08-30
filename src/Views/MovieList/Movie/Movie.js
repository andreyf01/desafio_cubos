import React from 'react';
import classes from './Movie.module.css';

import Popularity from '../../../Components/Popularity/Popularity';

const Movie = (props) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>

        </div>
        <Popularity popularity={props.movie.popularity} />
        <div>

        </div>
      </div>
    </div>
  )
}

export default Movie;