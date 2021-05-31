import { countryNotFound } from './notifications';
import clearMarkup from './clearMarkup';

export default async function fetchCountriesByName(searchQuery) {
  const response = await fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  } else {
    clearMarkup();
    countryNotFound();
    throw new Error(`Http exeption code: ${response.status}`);
  }
}
