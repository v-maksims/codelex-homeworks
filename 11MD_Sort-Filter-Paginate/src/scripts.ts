/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  loadCountriesNewTable, searchByProps, loadTablePagination, currentPagePagination,
} from './modules/functions';
import { searchBtn, firstList } from './modules/constantes';

const paginationID = 1;

// Select page
// const selectPageByNum = async (previos: number) => {
// };

// Load page event
window.addEventListener('DOMContentLoaded', () => {
  loadCountriesNewTable(firstList);
  loadTablePagination(firstList);
});

// Search button event
searchBtn.addEventListener('click', searchByProps);
// const all = document.querySelectorAll('.js-pagination');

window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  console.log(target.id);
});
