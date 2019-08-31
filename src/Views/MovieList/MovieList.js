import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import classes from './MovieList.module.css';

import SearchBar from '../../Components/SearchBar/SearchBar';
import Circle from '../../Components/Circle/Circle';
import Movie from './Movie/Movie';
import { searchStoreContext } from '../../Stores/SearchStore';
import { API, API_KEY } from '../../helpers/constants';

const MovieList = () => {
  const searchStore = useContext(searchStoreContext);
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setPage] = useState(1);

  const moviesPerPage = 5;
  const lastMovie = currentPage * moviesPerPage;
  const firstMovie = lastMovie - moviesPerPage;
  const currentMovies = movieList.slice(firstMovie, lastMovie);

  const search = async () => {
    try {
      if (searchStore.searchUrl) {
        const rawResponse = await fetch(searchStore.searchUrl);
        const response = await rawResponse.json();
        setMovieList(response.results);
      } else {
        setMovieList([]);
        setQuery('');
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    search();
  }, [searchStore.searchUrl])

  const handlePage = (event) => {
    setPage(event.target.id);
  }

  const pages = [];
  for (let i = 1; i <= Math.ceil(movieList.length / moviesPerPage); i++) {
    pages.push(i);
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleKey = (event) => {
    if (event.key === 'Enter')
      searchStore.changeSearchQuery(query.replace(' ', '+'));
  };

  const pageStyle = {
    width: '25px',
    height: '25px',
    fontSize: '1.2em'
  }

  const showPages = pages.map(number => {

    return (
      <li
        key={number}
        id={number}
        onClick={number != currentPage ? handlePage : null}>
        {number == currentPage ?
          (<Circle
            style={pageStyle}
            value={number} />) : number}
      </li>
    );
  });

  return (
    <div>
      <SearchBar
        keyDown={handleKey}
        changed={handleChange}
        value={query} />
      <div>
        {currentMovies.map((mov, index) => (
          <Movie
            key={index}
            movie={mov} />
        ))}
        <div className={classes.Pages}>
          <ul>
            {showPages}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default observer(MovieList);