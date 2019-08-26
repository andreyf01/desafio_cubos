import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import Movies from './Containers/Movies/Movies';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Movies />
        </Layout>
      </div>
    );
  }
}

export default App;
