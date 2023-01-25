/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import { TCountriesApi } from './modules/types';

//! Import Functions
import {
  createCoutriesTable,
  clearInputValues,
  clearCountriesTable,
  loadTablePagination,
  editInputValue,
  checkLink,
} from './modules/functions';

//! Import Constant
import {
  searchBtn,
  firstList,
  countryNameInput,
  countryCurrencyInput,
  countryCapitalInput,
  countryLanguageInput,
} from './modules/constantes';

// Standart start pagination and it will changes when click on page number
let paginationID = 1;
// Last edited link
let editedLink: string | null = null;
// Save previous clicked title
let previousSortTitle: HTMLElement | null = null;

// Function create table
const loadCountriesNewTable = async (linkGet: string) => {
  // Delete old countries table
  clearCountriesTable();
  const { data: countryBaseData } = await axios.get<TCountriesApi[]>(linkGet);
  countryBaseData.forEach((country) => createCoutriesTable(country));
  // Save edited link (for correct work)
  editedLink = linkGet;
};

// Current page
const currentPagePagination = async (previous: number, current: number, link: string) => {
  // Previos page to remove selected (visual)
  const previousPage = document.getElementById(`${previous}`);
  // For add new class (visual)
  const currentPage = document.getElementById(`${current}`);

  // Indexes for edit link
  const indexOne = link.indexOf('=');
  const indexTwo = link.indexOf('&');

  // New link
  const newLink = link.slice(0, indexOne + 1) + current + link.slice(indexTwo);

  // Remove old class
  previousPage.classList.remove('is-current');

  // Add class
  currentPage.classList.add('is-current');

  // New selected page in variable
  paginationID = +current;

  // Last link update
  editedLink = newLink;

  // Delete old countries table
  clearCountriesTable();

  // Load new countries table
  loadCountriesNewTable(newLink);
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
    searchLinkFirst += `name=${editInputValue(nameValue)}&`;
  }

  // Check if exist capital value
  if (capitalValue) {
    searchLinkFirst += `capital=${editInputValue(capitalValue)}&`;
  }

  // Check if exist currency value
  if (currencyValue) {
    searchLinkFirst += `currency.name=${editInputValue(currencyValue)}&`;
  }

  // Check if exist language value
  if (languageValue) {
    searchLinkFirst += `language.name=${editInputValue(languageValue)}&`;
  }
  // Some page cleaning
  clearCountriesTable();
  clearInputValues();

  // Load new table
  await loadCountriesNewTable(searchLinkFirst);
  loadTablePagination(searchLinkFirst);
  editedLink = searchLinkFirst;
  paginationID = 1;
};

// Order by desc
const orderDesc = async (item: string) => {
  // Variable for asc sort
  previousSortTitle = document.getElementById(item);

  // Check if link have '_sort' and slice link for correct work
  const newLink = `${checkLink(editedLink)}_sort=${item}&_order=desc`;
  // Clear table areas (only 20 countries in page)
  clearCountriesTable();
  // Load new table
  loadCountriesNewTable(newLink);
};

// Order by asc
const orderAsc = (item:string) => {
  // Remove previous sort Title
  previousSortTitle = null;

  // Check if link have '_sort' and slice link for correct work
  const newLink = `${checkLink(editedLink)}_sort=${item}&_order=asc`;
  // Clear table areas (only 20 countries in page)
  clearCountriesTable();
  // Load new table
  loadCountriesNewTable(newLink);
};

// Load page event
window.addEventListener('DOMContentLoaded', () => {
  loadCountriesNewTable(firstList);
  loadTablePagination(firstList);
});

// Search button event
searchBtn.addEventListener('click', searchByProps);

// Event listener for pagination
window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;

  // Pagination
  if (target.classList.contains('js-pagination')) {
    currentPagePagination(paginationID, +target.id, editedLink);
  }

  // Table titles
  if (target.classList.contains('js-table')) {
    if (!previousSortTitle) {
      orderDesc(target.id);
    } else {
      orderAsc(target.id);
    }
  }
});
