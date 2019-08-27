import React from 'react';
import classes from './SearchBar.module.css'

const searchBar = props => (
  <input
    className={classes.SearchBar}
    type="text"
    placeholder="Busque um filme por nome, ano ou gênero..." />
);

export default searchBar;