import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import MovieList from './Containers/MovieList/MovieList';
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
    expand: false
  };

  handleChange = (event) => {
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
  };

  search = async (query) => {
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
  }

  componentDidMount() {
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
  }

  /*expandMovie = (movieIndex) => {
    const movieId = this.state.movieList[movieIndex].id;
    this.getMovie(movieId);
  }*/

  getMovie = async (movieIndex) => {
    const movieId = this.state.movieList[movieIndex].id;
    try {
      const rawResponse = await fetch(`${API}movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
      const response = await rawResponse.json();
      console.log(response);
      this.setState(prevState => ({
        ...prevState,
        movieDetails: response,
        expand: true
      }));
    } catch (e) {
      console.log(e);
    }
  }

  index = () => {
    console.log('hehexd');
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

  render() {
    const { movieList, visible, movieDetails, genres, expand } = this.state;

    return (
      <div className="App">
        <Layout>
          <Cockpit
            clicked={this.index} />
          <SearchBar
            keyDown={this.handleKey}
            changed={this.handleChange}
            value={this.state.query} />
          <MovieList
            movies={movieList}
            visible={visible}
            titleClicked={this.getMovie}
            movieDetails={movieDetails}
            genres={genres}
            expand={expand}
            buttonClicked={this.handleBtnClicked} />
        </Layout>
      </div>
    );
  }
}

export default App;
