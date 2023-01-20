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
const pageBtnsSection = document.querySelector('.js-page-btns');
const characterList = document.querySelector('.js-characters-list');
const prevPageBtn = document.querySelector('.js-btn-prev');
const nextPageBtn = document.querySelector('.js-btn-next');
const pageCounter = document.querySelector('.js-page-count');

let pageNumber = 1;

const removeFromMainClassDisabled = () => {
  charactersSection.classList.remove('disabled');
  pageBtnsSection.classList.remove('disabled');
  loadCharactersBtn.classList.add('disabled');
};

const pageNumberAdd = (pageNum: number) => {
  if (pageNum >= 1 && pageNum < 20) {
    pageNumber += 1;
    pageCounter.innerHTML = `${pageNumber}`;
    // console.log(pageNumber);
  }
};

const pageNumberSubstract = (pageNum: number) => {
  if (pageNum >= 2) {
    pageNumber -= 1;
    pageCounter.innerHTML = `${pageNumber}`;
    // console.log(pageNumber);
  }
};

const checkIfAlive = (status: string) => {
  if (status === 'Alive') {
    return 'alive';
  } if (status === 'Dead') {
    return 'dead';
  }
  return 'unknown';
};

const charactersLoad = () => {
  fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      let html = '';
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

loadCharactersBtn.addEventListener('click', () => {
  removeFromMainClassDisabled();
  charactersLoad();
});

prevPageBtn.addEventListener('click', () => {
  pageNumberSubstract(pageNumber);
  charactersLoad();
});

nextPageBtn.addEventListener('click', () => {
  pageNumberAdd(pageNumber);
  charactersLoad();
});
