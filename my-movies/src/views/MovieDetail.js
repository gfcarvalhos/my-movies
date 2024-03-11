import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesService } from '../api/MoviesService';

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MoviesService.getMovieById(id);
    setMovie(data);
  };
  //Efeitos colaterais da funcao
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    //Fragmento do react
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview} </article>
    </>
  );
};
