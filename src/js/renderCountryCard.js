import { toManyMatches } from './notifications';
import createCountryCardsMarkup from './createCountryCardsMarkup';
import clearMarkup from './clearMarkup';

const refs = {
  countries: document.querySelector('.countries'),
};

const renderCountryCard = country => {
  if (country.length > 10) {
    clearMarkup();
    toManyMatches();
    return;
  }
  const countriesMarkup = createCountryCardsMarkup(country);
  refs.countries.innerHTML = countriesMarkup;
};

export { renderCountryCard };
