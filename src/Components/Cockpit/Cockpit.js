import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { searchStoreContext } from '../../Stores/SearchStore';

import classes from './Cockpit.module.css';

const Cockpit = props => {
  const searchStore = useContext(searchStoreContext);

  const redir = () => {
    searchStore.changeSelectedTag(null);
    searchStore.changeSearchQuery('');
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.Cockpit}>
      <span
        className={classes.Title}
        onClick={() => redir()}>
        Movies
      </span>
    </div>
  )
}

export default Cockpit;