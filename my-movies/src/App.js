import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { MovieContainer } from './styles/MoviesContainer';
import { MoviesService } from './api/MoviesService';

function App() {
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
    <div className="App">
      <Header />

      <MovieContainer>
        <MoviesList movies={movies} />
      </MovieContainer>
    </div>
  );
}

export default App;
