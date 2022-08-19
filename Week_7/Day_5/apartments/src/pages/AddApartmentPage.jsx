import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddApartmentPage() {
  const [title, setTitle] = useState('');
  const [pricePerDay, setPricePerDay] = useState(1000);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handlePrice = (e) => setPricePerDay(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    //The object we want to send
    const newApartment = { title, pricePerDay };

    //sends the object to the API
    //This means that the API will update itself with this information
    axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartment).then((response) => {
      console.log(response);
      setTitle('');
      setPricePerDay(1000);

      navigate('/');
    });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={handleTitle} />

        <label htmlFor="pricePerDay">Price:</label>
        <input
          type="number"
          name="pricePerDay"
          id="pricePerDay"
          value={pricePerDay}
          onChange={handlePrice}
        />

        <button type="submit">Add apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
