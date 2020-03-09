'use strict';



var saleForm = document.getElementById('saleForm');
var itemsList = document.getElementById('items');
// var itemsDiv = document.getElementById('items-list');
var counterIDs =0;

// constructor function to create a new Item
function StoreItems(name, phone, itemName, prise , itemPhoto){
  this.name = name;
  this.phone = phone;
  this.itemName = itemName;
  this.prise = prise;
  this.itemPhoto=itemPhoto;

  // add every new item to the array
  StoreItems.itemsArray.push(this);
  setItem();
}

// set the global array to empty
StoreItems.itemsArray = [];

// this fun will take all the value from the form on submit
function handleSubmit(event){
  event.preventDefault();

  var formId = document.getElementById('saleForm');

  // get all the values from the form
  var part = event.target;
  var name = part.name.value;
  var phone = part.phone.value;
  var itemName = part.itemName.value;
  var prise  = part.prise.value;
  var Photo = part.itemPhoto.value;
  console.log(Photo.split('\\'));
  var itemPhoto =`../img/${Photo.split('\\')[2]}`;
  console.log(itemPhoto);
  new StoreItems(name, phone, itemName, prise,itemPhoto);
  //console.log(StoreItems.itemsArray);
  renderNewItem();
  formId.reset();

}



///////////test for the image

// var openFile = function(itemPhoto) {
//   var input = itemPhoto.target;

//   var reader = new FileReader();
//   reader.onload = function(){
//     var dataURL = reader.result;
//     var output = document.getElementById('img');
//     output.src = dataURL;
//   };
//   reader.readAsDataURL(input.files[0]);
// };

//////////////////////



function setItem(){
  var newItem = JSON.stringify(StoreItems.itemsArray);
  //console.log(newItem);
  localStorage.setItem( 'newItem', newItem);

}


function getItem(){

  var storedItem = localStorage.getItem('newItem');
  if(storedItem){
    StoreItems.itemsArray = JSON.parse(storedItem);
  }

}

function renderNewItem(){

  getItem();

  var itemsLI = document.createElement('li');
  var img = document.createElement('img');
  // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemPhoto);
  img.setAttribute('src',StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemPhoto);
  itemsLI.appendChild(img);


  var nameLi = document.createElement('p');
  nameLi.textContent=`Item Name : ${StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemName}`;
  // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].name);
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

}

// Add an event listener to the submit button
saleForm.addEventListener('submit', handleSubmit);





// function handleCart(event){
//   event.preventDefault();

//   var choosen = event.target;

//   console.log(choosen);


// }





