import React from 'react';
import classes from './SearchBar.module.css'

const searchBar = props => (
  <input
    className={classes.SearchBar}
    type="text"
    placeholder="Busque um filme por nome, ano ou gênero..."
    onKeyDown={props.keyDown}
    onChange={props.changed} />
);

export default searchBar;