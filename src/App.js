import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout';
import MovieList from './Views/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';
import Cockpit from './Components/Cockpit/Cockpit';
import './App.css';

const API_KEY = 'f95f42152ef5946aaebac8ca5c73720f';
const API = 'https://api.themoviedb.org/3/';

class App extends Component {
  state = {
    query: '',
    movieList: [],
    genres: {},
    visible: false,
    movieDetails: {},
    expand: false,
    currentPage: 1,
    moviesPerPage: 5
  };

  /*handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      const query = this.state.query.replace(' ', '+');
      this.setState(prevState => ({
        ...prevState,
        query: query
      }));
      this.search(this.state.query);
    }
  };*/

  /*search = async (query) => {
    try {
      const rawResponse = await fetch(`${API}search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`);
      const response = await rawResponse.json();
      this.setState(prevState => ({
        ...prevState,
        visible: true,
        expand: false,
        movieList: response.results
      }));
    } catch (e) {
      console.log(e);
    }
  }*/

  /*componentDidMount() {
    try {
      //fetch(`${API}genre/movie/list?api_key=${API_KEY}&language=pt-BR`)
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f95f42152ef5946aaebac8ca5c73720f&language=pt-BR')
        .then(rawResponse => rawResponse.json())
        .then(response => {
          let genreNames = {};
          response.genres.forEach(({ id, name }) => {
            genreNames[id] = name;
          });
          this.setState(prevState => ({
            ...prevState,
            genres: genreNames
          }));
        })
    } catch (e) {
      console.log(e);
    }
  }*/

  /*expandMovie = (movieIndex) => {
    const movieId = this.state.movieList[movieIndex].id;
    this.getMovie(movieId);
  }*/

  /*getMovie = async (movieIndex) => {
    const movieId = this.state.movieList[movieIndex].id;
    try {
      const rawResponse = await fetch(`${API}movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
      const response = await rawResponse.json();
      this.setState(prevState => ({
        ...prevState,
        movieDetails: response,
        expand: true
      }));
    } catch (e) {
      console.log(e);
    }
  }*/

  index = () => {
    this.setState(prevState => ({
      ...prevState,
      expand: false,
      visible: false,
      query: ''
    }));
  }

  handleBtnClicked = (tagName) => {
    this.setState(prevState => ({
      ...prevState,
      query: tagName
    }));
    this.search(this.state.query);
  }

  handlePageClicked = (event) => {
    console.log(event.target.id);
    const page = event.target.id;
    this.setState(prevState => ({
      ...prevState,
      currentPage: page
    }));
  }

  render() {
    const { movieList, visible, movieDetails, genres, expand, currentPage, moviesPerPage } = this.state;
    const lastMovieIndex = currentPage * moviesPerPage;
    const firstMovieIndex = lastMovieIndex - moviesPerPage;
    const currentMovies = movieList.slice(firstMovieIndex, lastMovieIndex);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(movieList.length / moviesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="App">
        <Layout>
          <Router>
            <Cockpit
              clicked={this.index} />
            <Route
              path="/"
              exact
              component={() => (<MovieList />)} />
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
