import { useState } from 'react';

function AddMovie(props) {
  const { createMovie } = props;

  //We need to create state for every single input
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, sethasOscars] = useState(false);

  //We also need a handler function that will be triggered everytime we use that input
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDirector = (e) => setDirector(e.target.value);
  const handleRating = (e) => setIMDBRating(e.target.value);
  const handleOscars = (e) => sethasOscars(e.target.checked);

  //This handles the submit of the whole form
  const handleSubmit = (e) => {
    //This prevents the page reloadig
    e.preventDefault();

    const newMovie = { title, director, IMDBRating, hasOscars };
    createMovie(newMovie);

    //This will clear the state and therefore the values on all inputs after we submit the form
    setTitle('');
    setDirector('');
    setIMDBRating(5);
    sethasOscars(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        {/* The onChange triggers everytime the input changes value */}
        <input type="text" name="title" value={title} onChange={handleTitle} />

        <label htmlFor="director">Director</label>
        <input type="text" name="director" value={director} onChange={handleDirector} />

        <label htmlFor="IMDBRating">Rating</label>
        <input type="number" name="IMDBRating" value={IMDBRating} onChange={handleRating} />

        <label htmlFor="hasOscars">Won an oscar:</label>
        <input type="checkbox" name="hasOscars" checked={hasOscars} onChange={handleOscars} />

        <button type="submit">Create movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
