import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiURL = 'https://ironbnb-m3.herokuapp.com/apartments';

function ApartmentList() {
  const [loading, setLoading] = useState(true);
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        console.log(response.data);
        setApartments(response.data);

        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>List of apartments</h3>

      {loading && <p>Loading ...</p>}

      {!loading &&
        apartments.map((apartment) => {
          return (
            <div key={apartment._id} className="card">
              <img src={apartment.img} alt="apartment" />
              <h3>{apartment.title}</h3>
              <p>Price per day : {apartment.pricePerDay}</p>
            </div>
          );
        })}
    </div>
  );
}

export default ApartmentList;
