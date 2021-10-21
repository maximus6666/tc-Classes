import LocationCard from "./LocationCardClass.js";

export default class CharacterCart extends LocationCard {
  constructor(cardTitle, fieldTitle, fieldValue, fieldTitle2, fieldValue2, image) {
    super(cardTitle, fieldTitle, fieldValue, fieldTitle2, fieldValue2)
    this.image = image
  }

  append(parentCssClass) {
    const parentComponent = document.querySelector(parentCssClass);
    const div = document.createElement('div');
    div.classList.add('card-container');
    const card = `
       <h2>${this.cardTitle}</h2>
       <div class='character-card-img-wrapper'>
         <img class='character-card-img' alt='pic' src='${this.image}'>
       </div>
       <p>${this.fieldTitle}: <span>${this.fieldValue}</span></p>
       <p>${this.fieldTitle2}: <span>${this.fieldValue2}</span></p> 
       <div class='card-buttons-wrapper'>
         <button class='color-btn'>Border color</button>
         <button class='shadow-btn'>Add shadow!</button>
         <button class='delete-btn'>Delete card</button>
       </div>
     `;
    div.innerHTML = card;
    parentComponent.append(div);
    
    const colorBtns = document.querySelectorAll('.color-btn');
    const deleteBtns = document.querySelectorAll('.delete-btn');
    const shadowBtns = document.querySelectorAll('.shadow-btn');
 
    colorBtns.forEach((button) => button.addEventListener('click', this.changeBorderColor));
    deleteBtns.forEach((button) => button.addEventListener('click', this.deleteCard));
    shadowBtns.forEach((button) => button.addEventListener('click', this.addShadow));
   }

}
