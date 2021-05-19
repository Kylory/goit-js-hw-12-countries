// import createCountryCards from '../templates/countryTpl.hbs';

// const refs = {
//   input: document.querySelector('.input'),
//   countries: document.querySelector('.countries'),
// };

// export default function fetchCountries() {
//   const inputValue = refs.input.value;
//   fetch(`https://restcountries.eu/rest/v2/name/${inputValue}`).then(response => {
//     // console.log(response.json());
//     return response.json();
//   });
//   .then(country => {
//     console.log(country.length);
//     const countriesMarkup = createCountryCards(country);
//     document.querySelector('.countries').innerHTML = countriesMarkup;
//   });
// }
