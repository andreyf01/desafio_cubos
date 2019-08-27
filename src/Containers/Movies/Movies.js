import React from 'react';
import Movie from '../../Components/Movie/Movie';
import MovieFull from '../../Components/MovieFull/MovieFull';
import classes from './Movies.module.css';

const movieList = [
  { image: 'http://fakeimg.pl/140x210?text=thor&font=lobster', alt: 'thor', movieTitle: 'Thor: Ragnarok', description: 'Thor está preso do outro lado do universo. Ele precisa correr contra o tempo para voltar a Asgard e parar Ragnarok, a destruição de seu mundo, que está nas mãos da poderosa e implacável vilã Hela.' },
  { image: 'http://fakeimg.pl/140x210?text=mmaravilha&font=lobster', alt: 'mmaravilha', movieTitle: 'Mulher Maravilha', description: 'Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor se acidenta e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com todas as lutas, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.' }
]

const movies = (props) => (
  <div className={classes.Movies}>
    {movieList.map(mvs => (
      <Movie
        //<MovieFull
        key={mvs.alt}
        image={mvs.image}
        alt={mvs.alt}
        movieTitle={mvs.movieTitle}
        description={mvs.description} />
    ))}
    Pages
  </div>
);

export default movies;