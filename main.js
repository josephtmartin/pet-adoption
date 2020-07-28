const petCards = [
  {
    image:
      'https://thearkpets.org/wp-content/uploads/2019/07/DSCF1066-250x350.jpg',
    name: 'Coughy Boi',
    color: 'White/Grey',
    specialSkill: 'Violent Coughing',
    typeOfPet: 'Cat',
  },
  {
    image:
      'https://i.pinimg.com/originals/f4/f1/01/f4f101265c1111cb4ef1c69fa1f877f4.jpg',
    name: 'Bork',
    color: 'Gold',
    specialSkill: 'All The Borks and Nom Noms',
    typeOfPet: 'Dog',
  },
  {
    image:
      'https://i.pinimg.com/originals/2a/06/ec/2a06ecf942b265e3e1876b66c2989ac8.jpg',
    name: 'Chris Pratt',
    color: 'White',
    specialSkill: 'Intimidation',
    typeOfPet: 'Bunny',
  },
  {
    image:
      'https://thearkpets.org/wp-content/uploads/2019/07/DSCF1066-250x350.jpg',
    name: 'Coughy Boi',
    color: 'White/Grey',
    specialSkill: 'Violent Coughing',
    typeOfPet: 'Cat',
  },
  {
    image:
      'https://i.pinimg.com/originals/f4/f1/01/f4f101265c1111cb4ef1c69fa1f877f4.jpg',
    name: 'Bork',
    color: 'Gold',
    specialSkill: 'All The Borks and Nom Noms',
    typeOfPet: 'Dog',
  },
  {
    image:
      'https://i.pinimg.com/originals/2a/06/ec/2a06ecf942b265e3e1876b66c2989ac8.jpg',
    name: 'Chris Pratt',
    color: 'White',
    specialSkill: 'Intimidation',
    typeOfPet: 'Bunny',
  },
];

const handleButtonClick = (e) => {
  const buttonId = e.target.id;

  const selectedPets = [];

  for (let i = 0; i < petCards.length; i++) {
    if (petCards[i].typeOfPet === buttonId) {
      selectedPets.push(petCards[i]);
    }
  }

  // createPetCards(selectedPets)
  // //  CHANGE BACKGROUND COLOR
  // const bodySelector = document.querySelector('body');
  // if (buttonId === 'Cat') {
  //   bodySelector.style.backgroundColor = 'purple';
  // } else if (buttonId === 'Dog') {
  //   bodySelector.style.backgroundColor = 'blue';
  // } else if (buttonId === 'Bunny') {
  //   bodySelector.style.backgroundColor = 'red';
  // } else {
  //   bodySelector.style.backgroundColor = 'rgb(175, 196, 175)';
  // }
  // || buttonId === e.currentTarget.id
  if (buttonId === 'All') {
    createPetCards(petCards);
  } else {
    createPetCards(selectedPets);
  }
};

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createPetCards = (petCards) => {
  let domString = '';

  for (let i = 0; i < petCards.length; i++) {
    domString += `<div class="pet">`;
    domString += `<div class="petName">${petCards[i].name}</div>`;
    domString += `<div class="petImg"><img src=${petCards[i].image} alt="screenshot"></div>`;
    domString += `<div class="petColor">${petCards[i].color}</div>`;
    domString += `<div class="petSkill">${petCards[i].specialSkill}</div>`;
    if (petCards[i].typeOfPet === 'Dog') {
      domString += `<div class="petTypeDog">${petCards[i].typeOfPet}</div>`;
    } else if (petCards[i].typeOfPet === 'Cat') {
      domString += `<div class="petTypeCat">${petCards[i].typeOfPet}</div>`;
    } else if (petCards[i].typeOfPet === 'Bunny') {
      domString += `<div class="petTypeBunny">${petCards[i].typeOfPet}</div>`;
    }
    domString += `</div>`;
  }

  printToDom('petCard', domString);
};

const buttonEvents = () => {
  document
    .querySelector('#petType-buttons')
    .addEventListener('click', handleButtonClick);
};

const init = () => {
  buttonEvents();
  createPetCards(petCards);
};

init();
