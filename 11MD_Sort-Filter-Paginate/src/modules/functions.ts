/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import swal from 'sweetalert';
import { TCountriesApi } from './types';

//! import Constant
import {
  countriesTableBody,
  countryNameInput,
  countryCapitalInput,
  countryCurrencyInput,
  countryLanguageInput,
  paginationList,
} from './constantes';

// Function Create new row
const createCoutriesTable = (country: TCountriesApi) => {
  countriesTableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${country.name}</th>
      <th>${country.capital}</th>
      <th>${country.currency.name}</th>
      <th>${country.language.name}</th>
      </tr>
    `);
};

// Clear table
const clearCountriesTable = () => {
  countriesTableBody.innerHTML = '';
};

// Clear values
const clearInputValues = () => {
  countryNameInput.value = '';
  countryCapitalInput.value = '';
  countryCurrencyInput.value = '';
  countryLanguageInput.value = '';
};

// Load pagination
const loadTablePagination = async (link: string) => {
  // Calculation of the total number of countries depending on various factors (no limits)
  const { data: countryBaseData } = await axios.get<TCountriesApi[]>(link.replace('_page=1&_limit=20&', ''));
  const pageCount = +(countryBaseData.length / 20).toFixed(0);
  // Clear old pagination
  paginationList.innerHTML = '';
  // Create pagination
  for (let i = 1; i <= pageCount; i += 1) {
    paginationList.innerHTML += `
    <li>
      <a class="pagination-link ${i === 1 && 'is-current'} js-pagination" id="${i}" aria-label="Goto page ${i}">${i}</a>
    </li>
    `;
  }
};

// Check if string includes '_sort'
const checkLink = (oldLink: string) => (oldLink.includes('_sort') ? oldLink.slice(0, oldLink.indexOf('_sort')) : oldLink);

// Check if nothing found
const nothingAlert = (data: TCountriesApi[]) => {
  if (!data.length) {
    swal('Oops...', 'Nothing was found', 'error');
  }
};

export {
  createCoutriesTable,
  clearCountriesTable,
  clearInputValues,
  loadTablePagination,
  checkLink,
  nothingAlert,
};
