'use strict';

// target our order form from the html

var saleForm = document.getElementById('saleForm');
var itemsList = document.getElementById('items');


// constructor function to create a basic drink
function StoreItems(name, phone, itemName, prise){
  this.name = name;
  this.phone = phone;
  this.itemName = itemName;
  this.prise = prise;

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

  new StoreItems(name, phone, itemName, prise);
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
    renderOrders();
  }
}
function renderOrders(){
  // clear all my current uls to prevent duplicate information
  //itemsList.textContent = '';

  // go through the array and output the details of each drink in the array
  for(var i=0; i < StoreItems.itemsArray; i++){
    var itemsLI = document.createElement('li');
    var infoP = document.createElement('p');
    console.log();
    infoP.textContent = `${StoreItems.itemsArray[i].name} put ${StoreItems.itemsArray[i].itemName} WITH PRICE : ${StoreItems.itemsArray[i].prise} and your phone number is  ${StoreItems.itemsArray[i].phone}`;
    itemsLI.appendChild(infoP);
    itemsList.appendChild(itemsLI);
  }
}

// Add an event listener to the submit button
saleForm.addEventListener('submit', handleSubmit);
getItem();
