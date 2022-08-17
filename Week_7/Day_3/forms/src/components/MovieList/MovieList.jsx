import { useState } from 'react';
import moviesData from '../../movies.json';
import MovieCard from '../MovieCard/MovieCard';
import AddMovie from '../AddMovie/AddMovie';
import Searchbar from '../Searchbar/Searchbar';

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  //We create this display movies just so we don't mutate our original source of data
  const [displayMovies, setDisplayMovies] = useState(moviesData);

  const [showMovies, setShowMovies] = useState(true);

  const searchResults = (searchStr) => {
    let filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchStr.toLowerCase())
    );
    //This will make displayMovies only contain the movies filtered out by the query. The original movies state will stay untouched
    setDisplayMovies(filteredMovies);
    console.log(displayMovies);
  };

  const deleteMovie = (movieId) => {
    let filteredMovies = movies.filter((movie) => movie._id !== movieId);
    setMovies(filteredMovies);
    //Here we need to also update the display array otherwise the changes will not show up on the screen, even though they are happening
    setDisplayMovies(filteredMovies);
  };

  const createMovie = (movie) => {
    const updatedMovies = [movie, ...movies];
    setMovies(updatedMovies);
    //Here we need to also update the display array otherwise the changes will not show up on the screen, even though they are happening
    setDisplayMovies(updatedMovies);
  };

  const toggleMovies = () => {
    setShowMovies(!showMovies);
    console.log(showMovies);
  };

  return (
    <div>
      <h2>Movies list</h2>
      <Searchbar searchResults={searchResults} />
      <AddMovie createMovie={createMovie} />
      <button onClick={toggleMovies}>{showMovies ? 'Hide' : 'Show'}</button>

      {showMovies &&
        /* Here we map over displayMovies because that is the filtered list that we want to show */
        displayMovies.map((movie) => {
          return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
        })}
    </div>
  );
}

export default MovieList;
