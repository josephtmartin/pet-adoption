const petCards = [
  {
    image:
      "https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg",
    name: "Coughy Boi",
    color: "Orange",
    specialSkill: "Violent Coughing",
    typeOfPet: "Cat",
  },
  {
    image:
      "https://i.pinimg.com/236x/25/6a/8f/256a8f69b3ec7d149295e50053e2c398--golden-retriever-names-golden-retriever-puppy.jpg",
    name: "Bork",
    color: "Gold",
    specialSkill: "All The Borks and Nom Noms",
    typeOfPet: "Dog",
  },
  {
    image:
      "https://i.pinimg.com/236x/3b/45/24/3b45240a27ed32d7b68792405c54c421--hunting-trips-jurassic-park.jpg",
    name: "Chris Pratt",
    color: "Brown",
    specialSkill: "Intimidation",
    typeOfPet: "Dino",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1097349761189859330/5652XPXc_400x400.jpg",
    name: "Coughy Boi",
    color: "Orange",
    specialSkill: "Violent Coughing",
    typeOfPet: "Cat",
  },
  {
    image:
      "https://i.pinimg.com/236x/25/6a/8f/256a8f69b3ec7d149295e50053e2c398--golden-retriever-names-golden-retriever-puppy.jpg",
    name: "Bork",
    color: "Gold",
    specialSkill: "All The Borks and Nom Noms",
    typeOfPet: "Dog",
  },
  {
    image:
      "https://i.pinimg.com/236x/3b/45/24/3b45240a27ed32d7b68792405c54c421--hunting-trips-jurassic-park.jpg",
    name: "Chris Pratt",
    color: "Brown",
    specialSkill: "Intimidation",
    typeOfPet: "Dino",
  },
];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createPetCards = () => {
  let domString = "";

  for (let i = 0; i < petCards.length; i++) {
    domString += `<div class="pet">`;
    domString += `<div class="petName">${petCards[i].name}</div>`;
    domString += `<div class="petImg"><img src=${petCards[i].image} alt="screenshot"></div>`;
    domString += `<div class="petColor">${petCards[i].color}</div>`;
    domString += `<div class="petSkill">${petCards[i].specialSkill}</div>`;
    domString += `<div class="petType">${petCards[i].typeOfPet}</div>`;
    domString += `</div>`;
  }

  printToDom("petCard", domString);
};

createPetCards();
