import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Tag.module.css';

const Tag = ({ name }) => (
  <Link className={classes.Tag} to="/">
    {name}
  </Link>
);

export default Tag;
