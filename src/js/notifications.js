import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const toManyMatches = () => {
  error({
    text: 'To many matches found. Please enter a more specific query!',
    delay: 1500,
  });
};

const countryNotFound = () => {
  error({
    text: 'Country not found!',
    delay: 1500,
  });
};
export { toManyMatches, countryNotFound };
