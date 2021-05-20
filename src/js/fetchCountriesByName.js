export default function fetchCountriesByName(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      alert('Country not found');
    }
  });
}

// console.log(response.ok);
// if (response.ok) {
// return response.json();
// }
