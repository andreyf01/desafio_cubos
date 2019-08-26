import React from 'react';

const searchBar = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Busque um filme por nome, ano ou gênero..." />
    </div>
  );
}

export default searchBar;