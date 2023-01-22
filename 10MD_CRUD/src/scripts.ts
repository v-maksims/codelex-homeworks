import axios from 'axios';

// Type for API
type TCapybaraAPI = {
    id: number,
    name: string,
    image: string,
    info: string,
}

const createCardBtn = document.querySelector('.js-create-btn'); // Create new card button

// Function for creating card
const createCapybaraCard = (capybara: TCapybaraAPI) => {
  const cardsList: HTMLElement = document.querySelector('.js-cards-list');

  cardsList.insertAdjacentHTML('beforeend', `
    <div class="col s12 m6 l4 " id="${capybara.id}">
        <div class="card hoverable green lighten-3 js-card">
            <div class="card-image" >
                <img src="${capybara.image}"
                    alt="#" height="200" style="object-fit: cover;">
                <a class="btn-floating pulse halfway-fab waves-effect waves-light red js-halfway"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content ">
                <span class="card-title teal-text text-darken-4 center">
                    ${capybara.name}
                </span>
                <p class="center">
                    ${capybara.info}
                </p>
            </div>
            <div class="card-action">
                <a class="waves-effect waves-light btn-small teal darken-4 js-edit-card-btn">
                    <i class="material-icons right hide-on-small-only">
                        create
                    </i>
                    Edit
                </a>
                <a class=" btn-small teal darken-4 right waves-effect waves-light js-delete-card-btn">
                    <i class="material-icons right hide-on-small-only">
                        clear
                    </i>
                    Delete
                </a>
            </div>
        </div>
    </div>
  `);
};

// Check if create new card button is active
createCardBtn.addEventListener('click', async () => {
  // Constant with input areas
  const cardCreateImage: HTMLInputElement = document.querySelector('.js-image-url');
  const cardCreateName: HTMLInputElement = document.querySelector('.js-name');
  const cardCreateInformation: HTMLTextAreaElement = document.querySelector('.js-information');

  // Default value if user didn't insert url of image
  cardCreateImage.defaultValue = 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg';

  // Save values from inputs areas
  const capybaraImageValue = cardCreateImage.value;
  const capybaraNameValue = cardCreateName.value;
  const capybaraInformationValue = cardCreateInformation.value;

  // Check if all inputs entered
  if (capybaraImageValue && capybaraNameValue && capybaraInformationValue) {
    axios.post<TCapybaraAPI>('http://localhost:3004/capybaras', {
      image: capybaraImageValue,
      name: capybaraNameValue,
      info: capybaraInformationValue,
    });
  }
});

// Function for loading cards whet page started
const loadCapybarasCards = async () => {
  const res = await axios.get<TCapybaraAPI[]>('http://localhost:3004/capybaras');
  const capybarasData = res.data;
  capybarasData.forEach((capybara) => createCapybaraCard(capybara));
};

// Function for edit button
const editBtnClick = async () => {
  const res = await axios.get<TCapybaraAPI[]>('http://localhost:3004/capybaras');
  const capybarasData = res.data;
  const headerOfHTML = document.querySelector('.js-header');
  const cardEditBtns = document.querySelectorAll('.js-edit-card-btn');
  const cardInfoEditBtn = document.querySelector('.js-edit-information-btn');
  const capybaraCardEditArea = document.querySelector('.js-cards-edit-area');

  cardEditBtns.forEach((some, i) => {
    cardEditBtns[i].addEventListener('click', async () => {
      capybaraCardEditArea.classList.remove('disabled');
      const capybaraEditImage: HTMLInputElement = document.querySelector('.js-edit-image-url');
      const capybaraEditName: HTMLInputElement = document.querySelector('.js-edit-name');
      const capybaraEditInformation: HTMLTextAreaElement = document.querySelector('.js-edit-information');

      // Scroll up to edit form
      headerOfHTML.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });

      // Old values in input for change
      capybaraEditImage.value = capybarasData[i].image;
      capybaraEditName.value = capybarasData[i].name;
      capybaraEditInformation.value = capybarasData[i].info;

      // Finish editing
      cardInfoEditBtn.addEventListener('click', async () => {
        const capybaraEditedImage = capybaraEditImage.value;
        const capybaraEditedName = capybaraEditName.value;
        const capybaraEditedInformation = capybaraEditInformation.value;

        // Check if all values is entered
        if (capybaraEditedImage && capybaraEditedName && capybaraEditedInformation) {
          const selectedCardID = +cardEditBtns[i].parentElement.parentElement.parentElement.id;
          axios.put<TCapybaraAPI>(`http://localhost:3004/capybaras/${selectedCardID}`, {
            image: capybaraEditedImage,
            name: capybaraEditedName,
            info: capybaraEditedInformation,
          });
        }
      });
    });
  });
};

// Delete card button
const deleteBtnClick = () => {
  const cardDeleteBtns = document.querySelectorAll('.js-delete-card-btn');
  const capybaraCardList = document.querySelectorAll('.js-card');

  cardDeleteBtns.forEach((some, i) => {
    cardDeleteBtns[i].addEventListener('click', () => {
      const selectedCardID = +cardDeleteBtns[i].parentElement.parentElement.parentElement.id;
      axios.delete<TCapybaraAPI>(`http://localhost:3004/capybaras/${selectedCardID}`);
      capybaraCardList[i].parentElement.remove();
    });
  });
};

// Round icon next to the image
const halfway = () => {
  const halfways = document.querySelectorAll('.js-halfway');

  halfways.forEach((item, i) => {
    halfways[i].addEventListener('click', () => {
      const halwayClass = halfways[i].classList;
      if (halfways[i].childNodes[0].textContent !== 'done') {
        halwayClass.remove('red');
        halwayClass.add('green');
        halfways[i].childNodes[0].textContent = 'done';
      } else {
        halwayClass.remove('green');
        halwayClass.add('red');
        halfways[i].childNodes[0].textContent = 'add';
      }
    });
  });
};

// When page loading do this:
window.addEventListener('DOMContentLoaded', async () => {
  await loadCapybarasCards();
  editBtnClick();
  deleteBtnClick();
  halfway();
});
