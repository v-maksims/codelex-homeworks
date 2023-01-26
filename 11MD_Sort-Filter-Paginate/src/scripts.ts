/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import { TCountriesApi, TInputValues } from './modules/types';

//! Import Functions
import {
  createCoutriesTable,
  clearInputValues,
  clearCountriesTable,
  loadTablePagination,
  checkLink,
  nothingAlert,
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
  nothingAlert(countryBaseData);
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

  // Add new class
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
  // Link for serching after click on search btn
  let searchLink = `${firstList}`;

  // Object of input values
  const inputObject: TInputValues = {
    name: countryNameInput.value,
    capital: countryCapitalInput.value,
    'currency.name': countryCurrencyInput.value,
    'language.name': countryLanguageInput.value,
  };

  // check if value exist
  Object.entries(inputObject).forEach((input) => {
    if (input[1]) {
      searchLink += `${input[0]}_like=${input[1]}&`;
    }
  });

  // Some page cleaning
  clearCountriesTable();
  clearInputValues();

  // Load new table
  await loadCountriesNewTable(searchLink);
  loadTablePagination(searchLink);
  editedLink = searchLink;
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
