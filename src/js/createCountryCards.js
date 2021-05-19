import countryTpl from '../templates/countryTpl.hbs';

export function createCountryCards(country) {
  return countryTpl(country);
}
