import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import MovieList from './Containers/MovieList/MovieList';
import SearchBar from './Components/SearchBar/SearchBar';
import Cockpit from './Components/Cockpit/Cockpit';
import './App.css';

const API_KEY = 'f95f42152ef5946aaebac8ca5c73720f';

class App extends Component {
  state = {
    query: '',
    results: [],
    visible: false
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
      //      this.toggleResults();
    }
  };

  search = async (query) => {
    try {
      const rawResponse = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`);
      const response = await rawResponse.json();
      this.setState(prevState => ({
        ...prevState,
        visible: true,
        results: response.results
      }));
    } catch (e) {
      console.log(e);
    }
  }

  /*toggleResults = () => {
    console.log(this.state.results.length);
    if (this.state.results.length === 0) {
      console.log('aa');
    }
  };*/

  render() {
    const { results, visible } = this.state;

    return (
      <div className="App">
        <Layout>
          <Cockpit />
          <SearchBar
            keyDown={this.handleKey}
            changed={this.handleChange} />
          <MovieList
            movies={results}
            visible={visible} />
        </Layout>
      </div>
    );
  }
}

export default App;
