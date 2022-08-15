import React from 'react';

function StudentCard(props) {
  const { firstName, cohort, city, week, favouritePokemon } = props;

  return (
    <div>
      <h3>Hello {firstName}</h3>
      <h6>Cohort : {cohort}</h6>
      <h6>Current location: {city}</h6>
      <h6>Current week : {week}</h6>
      <h5>Favorite pokemon: {favouritePokemon.name}</h5>
      <h5>Favorite type: {favouritePokemon.type}</h5>
      <a href="https://github.com/LippoKo">Github profile</a>
    </div>
  );
}

export default StudentCard;
