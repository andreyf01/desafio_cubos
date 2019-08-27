import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import Movies from './Containers/Movies/Movies';
import SearchBar from './Components/SearchBar/SearchBar';
import Cockpit from './Components/Cockpit/Cockpit';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Cockpit />
          <SearchBar />
          <Movies />
        </Layout>
      </div>
    );
  }
}

export default App;
