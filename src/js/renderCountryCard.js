import createCountryCardsMarkup from './createCountryCardsMarkup';

const refs = {
  countries: document.querySelector('.countries'),
};

export default function renderCountryCard(country) {
  // console.log(country.length);
  if (country.length > 10) {
    alert('Too many matches found. Please enter a more specific query');
    return;
  }
  const countriesMarkup = createCountryCardsMarkup(country);
  refs.countries.innerHTML = countriesMarkup;
}
