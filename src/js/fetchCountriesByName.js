import { countryNotFound } from './notifications';
import clearMarkup from './clearMarkup';

export default function fetchCountriesByName(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      clearMarkup();
      countryNotFound();
    }
  });
}

// export default async function fetchCountriesByName(searchQuery) {
//   try {
//     const response = await fetch(`https://restcountries.eu/rest/v2/names/${searchQuery}`);
//     if (response.ok) {
//       const result = await response.json();
//       return result;
//     } else {
//       clearMarkup();
//       countryNotFound();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export default async function fetchCountriesByName(searchQuery) {
//   const response = await fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`);
//   const result = await response.json();
//   return result;
// }
