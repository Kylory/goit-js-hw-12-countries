import './css/style.css';
import fetchCountriesByName from './js/fetchCountriesByName';
import renderCountryCard from './js/renderCountryCard';
import _ from 'lodash';
import clearMarkup from './js/clearMarkup';

// import 'regenerator-runtime/runtime';

const refs = {
  input: document.querySelector('.input'),
};

async function showCountries() {
  if (refs.input.value) {
    try {
      const countries = await fetchCountriesByName(refs.input.value);
      return renderCountryCard(countries);
    } catch (error) {
      console.log(error);
    }
  } else clearMarkup();
}

refs.input.addEventListener('input', _.debounce(showCountries, 500));
