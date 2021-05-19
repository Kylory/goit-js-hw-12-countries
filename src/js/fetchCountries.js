import createCountryCards from '../templates/countryTpl.hbs';

export default function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
      console.log(country.length);
      const countriesMarkup = createCountryCards(country);
      document.querySelector('.countries').insertAdjacentHTML('beforeend', countriesMarkup);
    })
    .catch(error => {
      console.log('error', error);
    });
}
