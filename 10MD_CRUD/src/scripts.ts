import axios from 'axios';
import swal from 'sweetalert';

// Type for API
type TCapybaraAPI = {
    id: number,
    name: string,
    image: string,
    info: string,
}

const createCardBtn = document.querySelector('.js-create-btn'); // Create new card button
const editCardbtn = document.querySelector('.js-edit-information-btn'); // Edit area btn

let clickedCardID: number | null; // Save which card is selected (for edit)

// Function for creating card
const createCapybaraCard = (capybara: TCapybaraAPI) => {
  const cardsList: HTMLElement = document.querySelector('.js-cards-list');

  // Create new card in bottom of cardsList division
  cardsList.insertAdjacentHTML('beforeend', `
    <div class="col s12 m6 l4 " id="${capybara.id}">
        <div class="card hoverable green lighten-3 js-card">
            <div class="card-image" >
                <img src="${capybara.image || 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'}"
                    alt="#" height="200" style="object-fit: cover;">
                <a class="btn-floating pulse halfway-fab waves-effect waves-light red js-halfway" id="halfway-${capybara.id}"><i class="material-icons">add</i></a>
            </div>
            <div class="card-content ">
                <span class="card-title teal-text text-darken-4 center">
                    ${capybara.name || 'Capybara'}
                </span>
                <p class="center">
                    ${capybara.info || 'Inkognito'}
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

// Function for loading cards whet page started
const loadAllCapybarasCards = async () => {
  const res = await axios.get<TCapybaraAPI[]>('http://localhost:3004/capybaras');
  const capybarasData = res.data;
  capybarasData.forEach((capybara) => createCapybaraCard(capybara));
};

// Function for create new card in bottom of page
const createCardBtnFn = async () => {
  // Input elements for create new card
  const imageCreateInput: HTMLInputElement = document.querySelector('.js-image-url');
  const nameCreateInput: HTMLInputElement = document.querySelector('.js-name');
  const infoCreateInput: HTMLInputElement = document.querySelector('.js-information');

  // Save value whice entred user
  const imageValue = imageCreateInput.value;
  const nameValue = nameCreateInput.value;
  const infoValue = infoCreateInput.value;

  // Create new card in base and save in variable
  const newCardRes = await axios.post<TCapybaraAPI>('http://localhost:3004/capybaras', {
    image: imageValue,
    name: nameValue,
    info: infoValue,
  });
  // Save data about card
  const newCardData = newCardRes.data;

  // Create new card without refreshing page
  createCapybaraCard(newCardData);

  // Clear input after adding new card
  imageCreateInput.value = '';
  nameCreateInput.value = '';
  infoCreateInput.value = '';
};

// Function for editing card in top of page
const editCardBtnFn = async () => {
  // Editing area - area (for hide)
  const capybaraCardEditArea = document.querySelector('.js-cards-edit-area');
  // Clicked card ID fom variable out of function
  const laterClickedCard = document.getElementById(`${clickedCardID}`);
  // Editing area - image URL input
  const editImageUrl:HTMLInputElement = document.querySelector('.js-edit-image-url');
  // Editing area - name input
  const editName:HTMLInputElement = document.querySelector('.js-edit-name');
  // Editing area - information input
  const editInformation:HTMLInputElement = document.querySelector('.js-edit-information');

  // Value from input to edit save in base
  const newDataRes = await axios.patch<TCapybaraAPI>(`http://localhost:3004/capybaras/${clickedCardID}`, {
    image: editImageUrl.value,
    name: editName.value,
    info: editInformation.value,
  });
  const newData = newDataRes.data;

  // Delete old card
  laterClickedCard.remove();

  // Add new card in the end (after refreshing page will fall into place)
  createCapybaraCard(newData);

  // New card select by id
  const editedNewCard = document.getElementById(`${clickedCardID}`);

  // Alert for succes update
  swal('Yep!', 'Card edited!', 'success');

  // Hide edit area
  capybaraCardEditArea.classList.add('disabled');

  // Scroll to new card
  editedNewCard.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });

  // Set null for variable (clicked card)
  clickedCardID = null;
};

// Halway decor between image and text in the card
const halfway = (id: number) => {
  // Choise halway for changing
  const halfways = document.getElementById(`halfway-${id}`);

  // Get class to no repeat in if else statement
  const halwayClass = halfways.classList;

  // Check if child in halway is done or other (add)
  if (halfways.childNodes[0].textContent !== 'done') {
    halwayClass.remove('red');
    halwayClass.add('green');
    halfways.childNodes[0].textContent = 'done';
  } else {
    halwayClass.remove('green');
    halwayClass.add('red');
    halfways.childNodes[0].textContent = 'add';
  }
};

// Function for delete btn
const deleteBtnClick = (id: number) => {
  // Find card by ID
  const capybaraCard = document.getElementById(`${id}`);

  // Delete from database
  axios.delete<TCapybaraAPI>(`http://localhost:3004/capybaras/${id}`);

  // remove card from card list
  capybaraCard.remove();

  // Alert for succes card delete
  swal('Yep!', 'Card deleted!', 'success');
};

// Function for edit btn
const editBtnClick = async (id: number) => {
  // Editing area - area
  const capybaraCardEditArea = document.querySelector('.js-cards-edit-area');
  // Editing area - image input
  const capybaraEditImage: HTMLInputElement = document.querySelector('.js-edit-image-url');
  // Editing area - name input
  const capybaraEditName: HTMLInputElement = document.querySelector('.js-edit-name');
  // Editing area - information input
  const capybaraEditInformation: HTMLTextAreaElement = document.querySelector('.js-edit-information');

  // Remove class from editing area
  capybaraCardEditArea.classList.remove('disabled');

  // Scroll up to edit area
  capybaraCardEditArea.scrollIntoView({
    block: 'center',
    behavior: 'smooth',
  });

  // Get data about selected card
  const oldRes = await axios.get<TCapybaraAPI>(`http://localhost:3004/capybaras/${id}`);
  const capybarasOldData = oldRes.data;

  // Old values in input for change
  // (Known fields are given and the user himself chooses what and where to change)
  capybaraEditImage.value = capybarasOldData.image;
  capybaraEditName.value = capybarasOldData.name;
  capybaraEditInformation.value = capybarasOldData.info;

  clickedCardID = id;
};

// Load all cards when page are loaded
window.addEventListener('DOMContentLoaded', loadAllCapybarasCards);
// Create btn event listener
createCardBtn.addEventListener('click', createCardBtnFn);
// Edit choised card btn listener
editCardbtn.addEventListener('click', editCardBtnFn);

// Window listener for click with target
window.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  // Constant for edit and delete buttons selected card
  const cardIDClickedBtn = +target.parentElement.parentElement.parentElement.id;

  // console.log(cardIDClickedBtn);
  // console.log(target);

  // Check if target in halfway
  if (target.parentElement.classList.value.match('js-halfway')) {
    const parentHalfway = target.parentElement.id;
    halfway(+parentHalfway.slice(8));
  }

  // Check if target in delete btn
  if (target.classList.contains('js-delete-card-btn')) {
    deleteBtnClick(cardIDClickedBtn);
  }

  // Check if target in edit btn
  if (target.classList.contains('js-edit-card-btn')) {
    editBtnClick(cardIDClickedBtn);
  }
});
