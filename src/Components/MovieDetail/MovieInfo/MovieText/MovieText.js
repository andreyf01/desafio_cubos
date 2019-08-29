import React from 'react';
import classes from './MovieText.module.css';

const movieText = (props) => (
  <div className={classes.MovieText}>
    <div>
      <h3>Sinopse</h3>
      <p>{props.overview}</p>
    </div>
    <div>
      <h3>Informações</h3>
      <dl>
        <dt>Situação</dt>
        <dd>{props.sit}</dd>
        <dt>Idioma</dt>
        <dd>{props.lang}</dd>
        <dt>Duração</dt>
        <dd>{props.dur}</dd>
        <dt>Orçamento</dt>
        <dd>{props.budget}</dd>
        <dt>Receita</dt>
        <dd>{props.revenue}</dd>
        <dt>Lucro</dt>
        <dd>{props.profit}</dd>
      </dl>
    </div>
  </div>
);

export default movieText;