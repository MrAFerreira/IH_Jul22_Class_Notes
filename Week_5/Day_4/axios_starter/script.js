/* axios({
  method: 'GET',  HTTP method to be used - get, post, put, .... 
  url: 'https://restcountries.com', /* url to be used for the requests 
  params: {key: 'fahgjskbda5678'} /* URL parameters to be sent to the API 
})
.then((response) => {
  //Use the code from the response 
})
.catch((err) => console.log(err)) */

/* axios
  .get('https://restcountries.com/v3.1/name/portugal')
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => console.log(err));
 */

const getCountryInfo = async (countryName) => {
  try {
    let response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    let country = response.data[0];
    console.log(country);

    document.getElementById('country-name').innerText = country.name.common;
    document.getElementById('country-capital').innerText = country.capital[0];
    document.getElementById('country-flag').setAttribute('src', country.flags.png);
  } catch (error) {
    console.log(error);
    //Ternary operator
    //First step - Condition to check
    //After the ? - What runs if the condition is true
    // After the : - What runs if the condition is false (similar to an else)
    error.response.status === 404
      ? alert(`The country ${countryName} doesn't exist`)
      : alert('Sorry, server error');
  }
};

document.getElementById('get-country-btn').addEventListener('click', () => {
  const userInput = document.getElementById('country-name-input').value;
  getCountryInfo(userInput);
});
