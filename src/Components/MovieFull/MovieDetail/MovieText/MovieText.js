import React from 'react';
import classes from './MovieText.module.css';

const movieText = (props) => (
  <div className={classes.MovieText}>
    <h3>Sinopse</h3>
    <p>{props.description}</p>
    <h3>Informações</h3>

  </div>
);

export default movieText;