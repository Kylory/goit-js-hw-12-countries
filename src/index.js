import './css/style.css';
// import fetchCountries from './js/fetchCountries';
import countryTpl from './templates/countryTpl.hbs';
import _ from 'lodash';

const refs = {
  input: document.querySelector('.input'),
  countries: document.querySelector('.countries'),
};

function createCountryCardsMarkup(country) {
  return countryTpl(country);
}

function fetchCountries() {
  fetch(`https://restcountries.eu/rest/v2/name/${refs.input.value}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      const countriesMarkup = createCountryCardsMarkup(country);
      refs.countries.innerHTML = countriesMarkup;
    })
    .catch(error => {
      console.log('error', error);
    });
}

refs.input.addEventListener('input', _.debounce(fetchCountries, 500));
