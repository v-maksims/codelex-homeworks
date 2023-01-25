// ---------------HTML parent Elements ---------------
// Table body for countries
const countriesTableBody: HTMLElement = document.querySelector('.js-table-body');
const paginationList: HTMLElement = document.querySelector('.js-pagination-list');

// ---------------Input fields ---------------

// Input field for country name
const countryNameInput: HTMLInputElement = document.querySelector('.js-input-name');
// Input field for country capital
const countryCapitalInput: HTMLInputElement = document.querySelector('.js-input-capital');
// Input field for countries currency
const countryCurrencyInput: HTMLInputElement = document.querySelector('.js-input-currency');
// Input field for countries languages
const countryLanguageInput: HTMLInputElement = document.querySelector('.js-input-language');

// ---------------Buttons---------------

// Button for search result
const searchBtn = document.querySelector('.js-search-btn');

// ---------------Links---------------

// Default API link
const defaultLink = 'http://localhost:3004/countries';
// First 20 items link
const firstList = `${defaultLink}?_page=1&_limit=20&`;

// ---------------Export---------------
export {
  countriesTableBody,
  countryNameInput,
  countryCapitalInput,
  countryCurrencyInput,
  countryLanguageInput,
  searchBtn,
  defaultLink,
  firstList,
  paginationList,
};
