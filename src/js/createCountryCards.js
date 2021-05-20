import countryTpl from '../templates/countryTpl.hbs';

function createCountryCardsMarkup(country) {
  return countryTpl(country);
}
