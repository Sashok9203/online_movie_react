import React, { useEffect, useState } from 'react'
import { movieService } from '../../services/MovieService';
import { MovieCard } from '../MovieCard/MovieCard';
import { setRating } from '../../helpers/methods';
import './Home.css'

export const Home = () => {
 
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const result = (await movieService.getMovies()).data;
      if(result)
         setMovies(await setRating(result));
    })();
  }, []);
  
  return (
    <div className='d-flex flex-column gap-4'>
      {movies?.map(x => <MovieCard className='movie-card' key={x.id} movie={x}/>)}
    </div>
  )
}
