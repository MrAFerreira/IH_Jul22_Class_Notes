import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails() {
  const [country, setCountry] = useState(null);

  const { code } = useParams();

  const getCountry = async () => {
    try {
      let response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${code}`
      );
      setCountry(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountry();
  }, [code]);

  return (
    <div>
      {country && (
        <div>
          <h2>{country.name.common}</h2>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <hr />
          <p>Capital: {country.capital[0]}</p>
          <hr />
          <p>Area: {country.area}</p>
          <hr />
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
