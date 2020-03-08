'use strict';

// target our order form from the html

var saleForm = document.getElementById('saleForm');
var itemsList = document.getElementById('items');
var itemsInfo = document.getElementById('itemsInfo');
var itemsDiv = document.getElementById('items-list');
var counterIDs =0;


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


  var nameLi = document.createElement('p');
  nameLi.textContent=`Item Name : ${StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemName}`;
  itemsLI.appendChild(nameLi);

  var priseLi = document.createElement('p');
  priseLi.textContent=`prise : ${StoreItems.itemsArray[StoreItems.itemsArray.length-1].prise}`;
  itemsLI.appendChild(priseLi);

  var contactLi = document.createElement('p');
  contactLi.textContent=`contact with saler : ${StoreItems.itemsArray[StoreItems.itemsArray.length-1].phone}`;
  itemsLI.appendChild(contactLi);


  var addToCart = document.createElement('p');
  var AddButton = document.createElement('button');
  AddButton.setAttribute('id', `item${counterIDs}`);
  AddButton.textContent='Add TO Cart';

  itemsLI.appendChild(addToCart);
  addToCart.appendChild(AddButton);

  itemsList.appendChild(itemsLI);
  counterIDs ++ ;
  itemsDiv.addEventListener('click',handleCart);
}



function handleCart(event){
  event.preventDefault();

  var choosen = event.target;

  console.log(choosen);


}




// Add an event listener to the submit button
saleForm.addEventListener('submit', handleSubmit);
getItem();

