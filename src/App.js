import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout';
import MovieList from './Views/MovieList/MovieList';
import Cockpit from './Components/Cockpit/Cockpit';
import './App.css';

class App extends Component {
  state = {
    movieDetails: {},
  };

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
