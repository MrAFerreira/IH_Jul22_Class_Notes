import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../context/theme.context';

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  const { theme } = useContext(ThemeContext);

  //Async function to get info from the API
  const getAllApartments = async () => {
    try {
      let response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments');

      setApartments(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllApartments();
  }, []);

  return (
    <div className={'ApartmentsPage ' + theme}>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => {
        return (
          <div key={apartment._id}>
            <img src={apartment.img} alt="apartment" />
            <h3>{apartment.title}</h3>
            <p>Price per day: {apartment.pricePerDay}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApartmentsPage;
