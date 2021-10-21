import fetchData, { createCounter } from "./functions.js";
import CharacterCart from "./CharacterCardClass.js";
import LocationCard from "./LocationCardClass.js";

const getLocationBtn = document.querySelector('.get-location-button');
const getCharacterBtn = document.querySelector('.get-character-button');
getLocationBtn.addEventListener('click', getRandomLocation);
getCharacterBtn.addEventListener('click', getRandomCharacter);

const getLocationClickCounter = createCounter();
const getCharacterClickCounter = createCounter();

const locationsTitle = document.querySelector('.title-locations');
const charactersTitle = document.querySelector('.title-characters');
let domElemLocationClick = document.createElement('p');
domElemLocationClick.style.textAlign = 'center';
let domElemCharacterClick = document.createElement('p');
domElemCharacterClick.style.textAlign = 'center';

let numberOfLocations;
fetchData(`https://rickandmortyapi.com/api/location/`)
  .then(res => numberOfLocations = res.info.count);

async function getRandomLocation() {
  const randomId = Math.floor(Math.random() * numberOfLocations);
  const data = await fetchData(`https://rickandmortyapi.com/api/location/${randomId}`);

  const location = new LocationCard(data.name,'type', data.type, 'dimention', data.dimension);
  location.append('.location-wrapper');
 
  domElemLocationClick.innerText = 'Clicks: ' + getLocationClickCounter();
  locationsTitle.before(domElemLocationClick);
}

let numberOfCharacters;
fetchData(`https://rickandmortyapi.com/api/character/`)
  .then(res => numberOfCharacters = res.info.count);

async function getRandomCharacter() {
  const randomId = Math.floor(Math.random() * numberOfCharacters);
  const character = await fetchData(`https://rickandmortyapi.com/api/character/${randomId}`);
 
  const card = new CharacterCart(character.name, 'gender', character.gender, 'species', character.species, character.image);
  card.append('.character-wrapper');
 
  domElemCharacterClick.innerText = 'Clicks: ' + getCharacterClickCounter();
  charactersTitle.before(domElemCharacterClick);
}
