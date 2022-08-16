import './App.css';
import { useState } from 'react';
import StudentList from './components/StudentList/StudentList';
import MovieList from './components/StudentList/MovieList/MovieList';
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
        {/* <StudentList /> */}
        <MovieList />
      </div>
    );
  }
}

export default App;
