import './css/style.css';
// import fetchCountries from './js/fetchCountries';
import createCountryCards from './templates/countryTpl.hbs';
import _ from 'lodash';

const refs = {
  input: document.querySelector('.input'),
  countries: document.querySelector('.countries'),
};

const inputValue = refs.input.value;

function fetchCountries(inputValue) {
  return fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`).then(response => {
    return response.json();
  });
}

console.log(fetchCountries(inputValue));
// fetchCountries(inputValue);

function renderMarkup(country) {
  const countriesMarkup = createCountryCards(country);
  refs.countries.innerHTML = countriesMarkup;
}

// fetchCountries().then(renderMarkup);

fetchCountries();

refs.input.addEventListener('input', _.debounce(renderMarkup, 500));
