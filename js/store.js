'use strict';

// target our order form from the html

var saleForm = document.getElementById('saleForm');
var itemsList = document.getElementById('items');
var itemsInfo = document.getElementById('itemsInfo');



// constructor function to create a basic drink
function StoreItems(name, phone, itemName, prise , itemPhoto){
  this.name = name;
  this.phone = phone;
  this.itemName = itemName;
  this.prise = prise;
  this.itemPhoto=itemPhoto;

  // add every drink that gets created into an array
  StoreItems.itemsArray.push(this);
  setItem();
}

// set the global array to empty
StoreItems.itemsArray = [];


// event handler function to run everytime the form is submitted
function handleSubmit(event){
  event.preventDefault();

  var formId = document.getElementById('saleForm');

  // get all the values from the form
  var part = event.target;
  var name = part.name.value;
  var phone = part.phone.value;
  var itemName = part.itemName.value;
  var prise  = part.prise.value;
  var itemPhoto = part.itemPhoto.value;

  new StoreItems(name, phone, itemName, prise,itemPhoto);
  console.log(StoreItems.itemsArray);
  // update the previous orders with the new order
  renderOrders();
  formId.reset();

}

//update drinks
function setItem(){
  var newItem = JSON.stringify(StoreItems.itemsArray);
  console.log(newItem);
  localStorage.setItem( 'newItem', newItem);
}

//get all drinks
function getItem(){
  if(newItem){
    var newItem = localStorage.getItem('newItem');
    StoreItems.itemsArray = JSON.parse(newItem);
  }
}
function renderOrders(){

  var itemsLI = document.createElement('li');
  var img = document.createElement('img');
  img.setAttribute('src',StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemPhoto);
  itemsLI.appendChild(img);
  itemsList.appendChild(itemsLI);

  var infoOl = document.createElement('ol');

  var nameLi = document.createElement('li');
  nameLi.textContent=StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemName;
  infoOl.appendChild(nameLi);

  var priseLi = document.createElement('li');
  priseLi.textContent=`prise = ${StoreItems.itemsArray[StoreItems.itemsArray.length-1].prise}`;
  infoOl.appendChild(priseLi);
  

  var addToCart = document.createElement('li');
  var Addbutton = document.createElement('button');
  Addbutton.textContent='Add TO Cart';

  infoOl.appendChild(addToCart);
  addToCart.appendChild(Addbutton);
  itemsLI.appendChild(infoOl);




}


// Add an event listener to the submit button
saleForm.addEventListener('submit', handleSubmit);
getItem();

