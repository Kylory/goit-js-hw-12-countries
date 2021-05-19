// import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
// import createCountryCards from './templates/countryTpl.hbs';
import _ from 'lodash';

const refs = {
  input: document.querySelector('#input'),
  countries: document.querySelector('.countries'),
};

function log() {
  const searchQuery = refs.input.value;
  console.log(searchQuery);

  fetchCountries(searchQuery);
}

refs.input.addEventListener('input', _.debounce(log, 500));
