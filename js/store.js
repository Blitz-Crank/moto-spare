'use strict';



var saleForm = document.getElementById('saleForm');
var itemsList = document.getElementById('items');
// firstItems();
// var itemsDiv = document.getElementById('items-list');
// var counterIDs = 0;
var itemsArray = [];
// var all = [];
// constructor function to create a new Item
function StoreItems(name, phone, itemName, prise, itemPhoto) {
  this.name = name;
  this.phone = phone;
  this.itemName = itemName;
  this.prise = prise;
  this.itemPhoto = itemPhoto;

  // add every new item to the array

  itemsArray.push(this);
  // setItem();
}
// function Allthing(h) {
//   all.push(this);
// }

// set the global array to empty


function renderNewItem() {
  itemsList.innerHTML = '';
  for(var i = 0 ; i< itemsArray.length ; i++){
    var itemsLI = document.createElement('li');
    var img = document.createElement('img');
    // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemPhoto);
    img.setAttribute('src', itemsArray[i].itemPhoto);
    itemsLI.appendChild(img);
  
  
    var nameLi = document.createElement('p');
    nameLi.classList.add('item-name');
    nameLi.textContent = `Item Name : ${itemsArray[i].itemName}`;
    // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].name);
    itemsLI.appendChild(nameLi);
  
    var priseLi = document.createElement('p');
    priseLi.classList.add('price');
    priseLi.textContent = `prise : ${itemsArray[i].prise}`;
    // console.log(itemsArray[0]);
    itemsLI.appendChild(priseLi);
  
    // var contactDiv = document.createElement('div');
    // contactDiv.classList.add('contact-info');
    // var buttonEl = document.createElement('button');
    // buttonEl.textContent = 'Add to favourite';
    // contactDiv.appendChild(buttonEl);
    // var aTel = document.createElement('a');
    // aTel.setAttribute('href', `tel:${itemsArray[i].phone}`);
    // aTel.textContent = 'Click to Call!';
    // contactDiv.appendChild(aTel);

    //  itemsLI.appendChild(contactDiv);
    var contactDiv = document.createElement('div');
    contactDiv.setAttribute('id','callme');
    contactDiv.classList.add('contact-info');
    var buttonEl = document.createElement('button');
    buttonEl.textContent = 'Add to favourite';
    contactDiv.appendChild(buttonEl);
    var aTel = document.createElement('a');
    aTel.setAttribute('id','callmeMain');
    aTel.setAttribute('href', `tel:${itemsArray[i].phone}`);
    // aTel.textContent = 'Click to Call!';
    contactDiv.appendChild(aTel);
     itemsLI.appendChild(contactDiv);
     
  
  
    var addToCart = document.createElement('p');
    buttonEl.setAttribute('id', `item${i}`);
    buttonEl.setAttribute('class', `list`);
    // AddButton.textContent = 'contact  Cart';
  
    itemsLI.appendChild(addToCart);
  
    itemsList.appendChild(itemsLI);
  }


}




var pickedArr = [];

// set item for all
function setItem() {
  var newItem = JSON.stringify(itemsArray);
  //console.log(newItem);
  localStorage.setItem('newItem', newItem);

}
function setItemCart() {
  var cartItem = JSON.stringify(pickedArr);
  //console.log(newItem);
  localStorage.setItem('picked', cartItem);
}

//get item for all
function getItem() {
  var storedItem = localStorage.getItem('newItem');
  // itemsArray = storedItem;
  if (localStorage.newItem) {
    itemsArray = JSON.parse(storedItem);
    renderNewItem();
  }
}

saleForm.addEventListener('submit', handleSubmit);
getItem();

// this fun will take all the value from the form on submit
function handleSubmit(event) {
  event.preventDefault();

  var formId = document.getElementById('saleForm');

  // get all the values from the form
  var part = event.target;
  var name = part.name.value;
  var phone = part.phone.value;
  var itemName = part.itemName.value;
  var prise = part.prise.value;
  var Photo = part.itemPhoto.value;
  // console.log(Photo.split('\\'));
  var itemPhoto = `/img/${Photo.split('\\')[2]}`;
  // console.log(itemPhoto);
  new StoreItems(name, phone, itemName, prise, itemPhoto);
  //console.log(StoreItems.itemsArray);
   renderNewItem();  
  formId.reset();
  formId.style.display = 'none';
  setItem();
}

//calling events
// Add an event listener to the submit button

// for cart
var listSelector = document.querySelectorAll('.list');
console.log(listSelector);


for (var eventCount = 0; eventCount < listSelector.length; eventCount++) {
  // console.log(listSelector[eventCount]);
  // console.log(listSelector.length);
  console.log(eventCount);
  listSelector[eventCount].addEventListener('click', function (event) {
    event.preventDefault();
    // console.log(event.target.id);
    var theTarget = event.target;
    // console.log(itemsArray[Number(theTarget.id.substring(4))]);
    // console.log((theTarget.id.substring(4)));
    if (theTarget.id ===`item${Number(theTarget.id.substring(4))}`){
    var selectedEl = document.getElementById(`item${Number(theTarget.id.substring(4))}`);
    pickedArr.push(itemsArray[Number(theTarget.id.substring(4))]);
    console.log(pickedArr);
    setItemCart();
    selectedEl.textContent = 'added';
    selectedEl.style.backgroundColor = 'red';

    

    }
  });
  // console.log(pickedArr);
  
}

// console.log(listSelector.length);
