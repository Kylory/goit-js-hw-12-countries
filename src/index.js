// import './sass/main.scss';
import _ from 'lodash';

const refs = {
  input: document.querySelector('#input'),
};
// refs.input.addEventListener('input', log);

refs.input.addEventListener(
  'input',
  _.debounce(() => {
    console.log('qwe');
  }, 500),
);
// let inputCountry = refs.input.value;

// _.debounce(() => {log}, 300)

function log() {
  const inputCountry = refs.input.value;
  console.log(inputCountry);

  fetch(`https://restcountries.eu/rest/v2/name/${inputCountry}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      console.log(country);
      console.log(country.length);
    })
    .catch(error => {
      console.log(error);
    });
}

// document.querySelector('input').addEventListener(
//   'input',
//   _.debounce(() => {
//     log;
//   }, 300),
// );
