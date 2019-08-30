import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Cockpit.module.css';

const cockpit = props => {
  return (
    <div className={classes.Cockpit}>
      <Link
        className={classes.Title}
        to="/">
        Movies
      </Link>
    </div>
  )
}

export default cockpit;