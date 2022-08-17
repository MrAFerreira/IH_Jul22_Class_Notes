import './App.css';
import { useState } from 'react';

import MovieList from './components/MovieList/MovieList';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  //Conditional rendering with if else
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default App;
