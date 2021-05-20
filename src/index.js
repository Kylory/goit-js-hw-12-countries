import './css/style.css';
import fetchCountriesByName from './js/fetchCountriesByName';
import renderCountryCard from './js/renderCountryCard';
import _ from 'lodash';

const refs = {
  input: document.querySelector('.input'),
};

function showCountries() {
  fetchCountriesByName(refs.input.value).then(renderCountryCard);
}

refs.input.addEventListener('input', _.debounce(showCountries, 500));
