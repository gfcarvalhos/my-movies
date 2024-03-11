import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { MovieContainer } from './styles/MoviesContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <MovieContainer>
        <MoviesList movies={[]} />
      </MovieContainer>
    </div>
  );
}

export default App;
