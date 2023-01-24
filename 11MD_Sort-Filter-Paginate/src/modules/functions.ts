/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import { TCountriesApi } from './types';
import {
  countriesTableBody,
  countryNameInput,
  countryCapitalInput,
  countryCurrencyInput,
  countryLanguageInput,
  firstList,
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
  const pageLinkWithoutLimits = link.replace('_page=1&_limit=20&', '');
  const { data: countryBaseData } = await axios.get<TCountriesApi[]>(pageLinkWithoutLimits);
  const pageCount = +(countryBaseData.length / 20).toFixed(0);
  paginationList.innerHTML = '';
  for (let i = 1; i <= pageCount; i += 1) {
    paginationList.innerHTML += `
    <li>
      <a class="pagination-link ${i === 1 && 'is-current'} js-pagination" id="${i}" aria-label="Goto page ${i}">${i}</a>
    </li>
    `;
  }
};

// Current page

const currentPagePagination = async (previous: number, current: number) => {
  const previousPage = document.getElementById(`${previous}`);
  const currentPage = document.getElementById(`${current}`);

  previousPage.classList.remove('is-current');
  currentPage.classList.add('is-current');
};

// Function create table
const loadCountriesNewTable = async (linkGet: string) => {
  const { data: countryBaseData } = await axios.get<TCountriesApi[]>(linkGet);
  countryBaseData.forEach((country) => createCoutriesTable(country));
};

// Function for searc button
const searchByProps = async () => {
  // Input values
  const nameValue = countryNameInput.value;
  const capitalValue = countryCapitalInput.value;
  const currencyValue = countryCurrencyInput.value;
  const languageValue = countryLanguageInput.value;
  // Link for serching after click on search btn
  let searchLinkFirst = `${firstList}`;

  // Check if exist name value
  if (nameValue) {
    searchLinkFirst += `name=${nameValue}&`;
  }

  // Check if exist capital value
  if (capitalValue) {
    searchLinkFirst += `capital=${capitalValue}&`;
  }

  // Check if exist currency value
  if (currencyValue) {
    searchLinkFirst += `currency.name=${currencyValue}&`;
  }

  // Check if exist language value
  if (languageValue) {
    searchLinkFirst += `language.name=${languageValue}&`;
  }
  // Some page cleaning
  clearCountriesTable();
  clearInputValues();

  // Load new table
  await loadCountriesNewTable(searchLinkFirst);
  loadTablePagination(searchLinkFirst);
};

export {
  loadCountriesNewTable,
  searchByProps,
  loadTablePagination,
  currentPagePagination,
};
