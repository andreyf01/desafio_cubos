import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import SearchBar from '../../Components/SearchBar/SearchBar';

const layout = (props) => (
  <Aux>
    <div>Header, Toolbar, SideDrawer(?)</div>
    <SearchBar />
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;