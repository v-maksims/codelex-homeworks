import swal from 'sweetalert';

type TcharactersProp = {
  id: number,
  image: string,
  name: string
  status: string,
  species: string,
  location: {
    name: string
  },
  episode: string[]
}

const loadCharactersBtn = document.querySelector('.js-btn-start');
const charactersSection = document.querySelector('.js-characters-section');
const pageBtnSection = document.querySelector('.js-page-btn');
const characterList = document.querySelector('.js-characters-list');
const loadMoreBtn = document.querySelector('.js-load-more');

let pageNumber = 1;
let html = '';

const removeFromMainClassDisabled = () => {
  charactersSection.classList.remove('disabled');
  pageBtnSection.classList.remove('disabled');
  loadCharactersBtn.classList.add('disabled');
};

const checkIfAlive = (status: string) => {
  if (status === 'Alive') {
    return 'alive';
  }
  if (status === 'Dead') {
    return 'dead';
  }
  return 'unknown';
};

const charactersLoad = () => {
  fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      characters.forEach((character: TcharactersProp) => {
        fetch(character.episode[0])
          .then((response) => response.json())
          .then((episode) => {
            html += `
              <div  class="characters__item">
                <img class="character__image" src=${character.image} alt="character-${character.id}">
                <div class="characters__info-wrap">
                  <div class="character__main-info">
                    <h4 class="character__name">${character.name}</h4>
                    <span class="character__status-species ${checkIfAlive(character.status)}">${character.status} - ${character.species}</span>
                  </div>
                  <div class="character__second-info">
                    <span class="character__last-place-text">Last known location:</span>
                    <span class="character__last-place-location">${character.location.name}</span>
                  </div>
                  <div class="character__second-info">
                    <span class="character__first-seen-text">First seen in:</span>
                    <span class="character__first-seen-episode">${episode.name}</span>
                  </div>
                </div>
              </div>
            `;
            characterList.innerHTML = html;
          });
      });
    });
};

const loadMoreFunction = (num: number) => {
  if (num < 42) {
    pageNumber += 1;
    charactersLoad();
  } else {
    swal('Oops', 'You have reached the end', 'error');
  }
};

loadCharactersBtn.addEventListener('click', () => {
  removeFromMainClassDisabled();
  charactersLoad();
});

loadMoreBtn.addEventListener('click', () => {
  loadMoreFunction(pageNumber);
});
