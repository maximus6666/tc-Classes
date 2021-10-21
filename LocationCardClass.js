export default class LocationCard {
  constructor(
    cardTitle = '', 
    fieldTitle = '', 
    fieldValue = '',
    fieldTitle2 = '', 
    fieldValue2 ='',  
    ) {
    this.cardTitle = cardTitle 
    this.fieldTitle = fieldTitle
    this.fieldValue = fieldValue
    this.fieldTitle2 = fieldTitle2
    this.fieldValue2 = fieldValue2
  }

  append(parentCssClass) {
   const parentComponent = document.querySelector(parentCssClass);
   const div = document.createElement('div');
   div.classList.add('card-container');
   const card = `
      <h2>${this.cardTitle}</h2>
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

  changeBorderColor(event) {
    const card = event.target.closest('.card-container');
    card.classList.toggle('border-red');
  }

  deleteCard(event) {
    const card = event.target.closest('.card-container');
    card.remove();
  }

  addShadow(event) {
    const card = event.target.closest('.card-container');
    card.classList.toggle('shadow');
  }
 
}
