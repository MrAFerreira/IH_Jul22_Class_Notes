import { useState } from 'react';
import moviesData from '../../../movies.json';
import MovieCard from '../../MovieCard/MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    let filteredMovies = movies.filter((movie) => movie._id !== movieId);
    setMovies(filteredMovies);
  };

  const toggleMovies = () => {
    setShowMovies(!showMovies);
    console.log(showMovies);
  };

  return (
    <div>
      <h2>Movies list</h2>
      <button onClick={toggleMovies}>{showMovies ? 'Hide' : 'Show'}</button>

      {showMovies &&
        movies.map((movie) => {
          return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
        })}
    </div>
  );
}

export default MovieList;
