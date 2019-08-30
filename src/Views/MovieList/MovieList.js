import React, { useState } from 'react';
import classes from './MovieList.module.css';

import SearchBar from '../../Components/SearchBar/SearchBar';
import Movie from './Movie/Movie';

import { API, API_KEY } from '../../helpers/constants';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      search(query.replace(' ', '+'));
    }
  };

  const search = async (query) => {
    try {
      const rawResponse = await fetch(
        `${API}search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`
      );
      const response = await rawResponse.json();
      setMovieList(response.results);
      console.log(response.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <SearchBar
        keyDown={handleKey}
        changed={handleChange}
        value={query} />
      <div>{movieList.map((mov, index) => (
        <Movie
          key={index}
          movie={mov} />
      ))}
      </div>
    </div>
  )
}

export default MovieList;