import createCountryCardsMarkup from './createCountryCardsMarkup';

const refs = {
  countries: document.querySelector('.countries'),
};

export default function renderCountryCard(country) {
  const countriesMarkup = createCountryCardsMarkup(country);
  refs.countries.innerHTML = countriesMarkup;
}
