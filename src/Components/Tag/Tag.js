import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { searchStoreContext } from '../../Stores/SearchStore';

import classes from './Tag.module.css';

const Tag = ({ name, id }) => {
  const searchStore = useContext(searchStoreContext);

  const redir = () => {
    searchStore.changeSelectedTag(id);
    return <Redirect to="/" />;
  }

  return (
    <span className={classes.Tag} onClick={() => redir()}>
      {name}
    </span>
  );
};

export default Tag;
