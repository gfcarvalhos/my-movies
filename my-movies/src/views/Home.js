import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList';
import { MovieContainer } from '../styles/MoviesContainer';
import { MoviesService } from '../api/MoviesService';

export const Home = () => {
  //Variavel de estado para o componente (movies) e metodo para alterar o componente (setMovies)
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MoviesService.getMovies();
    setMovies(data.results);
  };
  //Efeitos colaterais da funcao
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContainer>
      <MoviesList movies={movies} />
    </MovieContainer>
  );
};
