import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import Movies from './Containers/Movies/Movies';
import SearchBar from './Components/SearchBar/SearchBar';
import Cockpit from './Components/Cockpit/Cockpit';
import './App.css';

const API_KEY = 'f95f42152ef5946aaebac8ca5c73720f';

class App extends Component {
  state = {
    query: '',
    results: [],
    showResults: false
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleKey = (event) => {
    if (event.key === 'Enter') {
      const query = this.state.query.replace(' ', '+');
      this.setState({ query: query });
      this.search(this.state.query);
    }
  };

  search = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          results: responseData.results
        });
        console.log(this.state.results);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Cockpit />
          <SearchBar
            keyDown={this.handleKey}
            changed={this.handleChange} />
          <Movies />
        </Layout>
      </div>
    );
  }
}

export default App;
