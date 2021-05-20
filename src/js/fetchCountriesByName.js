import { countryNotFound } from './notifications';

export default function fetchCountriesByName(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      countryNotFound();
    }
  });
}
