function MovieCard(props) {
  const { movie, clickToDelete } = props;

  /* Extracting a function, especially useful if we have more than two possible returns */
  const checkRating = (rating) => {
    if (rating > 9) {
      return <span className="green">{rating}</span>;
    } else if (rating < 9 && rating > 7) {
      return <span className="yellow">{rating}</span>;
    } else {
      return <span className="red">{rating}</span>;
    }
  };

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {checkRating(movie.IMDBRating)}</p>

      {/* Inline conditional rendering */}
      {/* With the AND operator (&&) */}
      {/*  {movie.hasOscars && <p>This movie has oscars!</p>}
      {!movie.hasOscars && <p>No oscars for you!</p>} */}

      {/* Using ternary operator - devaluates the condition first, if true returns the first value, if false, returns the second value */}

      {movie.hasOscars ? <p>This movie has oscars!</p> : <p>No oscars for you!</p>}

      <button onClick={() => clickToDelete(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
