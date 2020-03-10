'use strict';



var saleForm = document.getElementById('saleForm');
var itemsList = document.getElementById('items');
firstItems();
// var itemsDiv = document.getElementById('items-list');
var counterIDs =4;
var itemsArray = [];
var all = [];
// constructor function to create a new Item
function StoreItems(name, phone, itemName, prise , itemPhoto){
  this.name = name;
  this.phone = phone;
  this.itemName = itemName;
  this.prise = prise;
  this.itemPhoto=itemPhoto;

  // add every new item to the array
  itemsArray.push(this);
  setItem();
}
function Allthing(h){
all.push(this);
}

// set the global array to empty
StoreItems.prototype.renderNewItem = function(){

  

  var itemsLI = document.createElement('li');
  itemsLI.setAttribute('id',`list${counterIDs}`);
  
  var img = document.createElement('img');
  // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemPhoto);
  img.setAttribute('src',itemsArray[itemsArray.length-1].itemPhoto);
  itemsLI.appendChild(img);


  var nameLi = document.createElement('p');
  nameLi.textContent=`Item Name : ${itemsArray[itemsArray.length-1].itemName}`;
  // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].name);
  itemsLI.appendChild(nameLi);

  var priseLi = document.createElement('p');
  priseLi.textContent=`prise : ${itemsArray[itemsArray.length-1].prise}`;
  itemsLI.appendChild(priseLi);

  var contactLi = document.createElement('p');
  contactLi.textContent=`contact with saler : ${itemsArray[itemsArray.length-1].phone}`;
  itemsLI.appendChild(contactLi);


  var addToCart = document.createElement('p');
  var AddButton = document.createElement('button');
  AddButton.setAttribute('id', `item${counterIDs}`);
  AddButton.setAttribute('class',`list`);
  AddButton.textContent='Add TO Cart';

  itemsLI.appendChild(addToCart);
  addToCart.appendChild(AddButton);

  itemsList.appendChild(itemsLI);
  counterIDs ++ ;

}


Allthing.prototype.renderNewItem = function(){


  var itemsLI = document.createElement('li');
  var img = document.createElement('img');
  // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].itemPhoto);
  img.setAttribute('src',itemsArray[itemsArray.length-1].itemPhoto);
  itemsLI.appendChild(img);


  var nameLi = document.createElement('p');
  nameLi.textContent=`Item Name : ${itemsArray[itemsArray.length-1].itemName}`;
  // console.log(StoreItems.itemsArray[StoreItems.itemsArray.length-1].name);
  itemsLI.appendChild(nameLi);

  var priseLi = document.createElement('p');
  priseLi.textContent=`prise : ${itemsArray[itemsArray.length-1].prise}`;
  console.log(itemsArray[0]);
  itemsLI.appendChild(priseLi);

  var contactLi = document.createElement('p');
  contactLi.textContent=`contact with saler : ${itemsArray[itemsArray.length-1].phone}`;
  itemsLI.appendChild(contactLi);


  var addToCart = document.createElement('p');
  var AddButton = document.createElement('button');
  AddButton.setAttribute('id', `item${counterIDs}`);
  AddButton.setAttribute('class',`list`);
  AddButton.textContent='Add TO Cart';

  itemsLI.appendChild(addToCart);
  addToCart.appendChild(AddButton);

  itemsList.appendChild(itemsLI);
  counterIDs ++ ;

}


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
   var newOne =new StoreItems(name, phone, itemName, prise,itemPhoto);
  //console.log(StoreItems.itemsArray);
  newOne.renderNewItem();
  formId.reset();

}


var pickedArr = [];

function selectItem(event){

  event.preventDefault();
  var theTarget = event.target;
  for(var i = 0;i<all.length;i++){
    if (theTarget.id ===`item${i}`){
      var selectedEl = document.getElementById(`list${i}`);
      pickedArr.push(all[i]);
      setItemCart();
      console.log(pickedArr);
      
   

    }

  }
  

}




// set item for all
function setItem(){
  var newItem = JSON.stringify(itemsArray);
  //console.log(newItem);
  localStorage.setItem( 'newItem', newItem);

}
function setItemCart(){
  var cartItem = JSON.stringify(pickedArr);
  //console.log(newItem);
  localStorage.setItem('picked', cartItem);

}

//get item for all
function getItem(){

  var storedItem = localStorage.getItem('newItem');
  if(localStorage.newItem){
    itemsArray = JSON.parse(storedItem);
    for(var i= 0 ;i<itemsArray.length;i++){
      new Allthing(itemsArray[i]).renderNewItem();;
      
    }
    
    
  }

}
saleForm.addEventListener('submit', handleSubmit);
getItem();
// // local items
function firstItems (){
  //first item
  var itemsLI0 = document.createElement('li');
  itemsLI0.setAttribute('id','list0');
  var img0 = document.createElement('img');
  img0.setAttribute('src','../img/motor.jpg');
  img0.setAttribute('alt','motor');
  itemsLI0.appendChild(img0);
  var nameLi0 = document.createElement('p');
  nameLi0.textContent='Item Name : Motor';
  itemsLI0.appendChild(nameLi0);
  var priseLi0 = document.createElement('p');
  priseLi0.textContent='prise : 10jd';
  itemsLI0.appendChild(priseLi0);
  var contactLi0 = document.createElement('p');
  contactLi0.textContent='contact with saler : 07953277';
  itemsLI0.appendChild(contactLi0);
  var addToCart0 = document.createElement('p');
  var AddButton0 = document.createElement('button');
  AddButton0.setAttribute('id', 'item0');
  AddButton0.textContent='Add TO Cart';
  AddButton0.setAttribute('class',`list`);
  itemsLI0.appendChild(addToCart0);
  addToCart0.appendChild(AddButton0);
  itemsList.appendChild(itemsLI0);
  /////
  /// second item
  var itemsLI1 = document.createElement('li');
  itemsLI1.setAttribute('id','list1');
  var img1 = document.createElement('img');
  img1.setAttribute('src','../img/battery.jpg');
  img1.setAttribute('alt','battery');
  itemsLI1.appendChild(img1);
  var nameLi1 = document.createElement('p');
  nameLi1.textContent='Item Name : Battery';
  itemsLI1.appendChild(nameLi1);
  var priseLi1 = document.createElement('p');
  priseLi1.textContent='prise : 20jd';
  itemsLI1.appendChild(priseLi1);
  var contactLi1 = document.createElement('p');
  contactLi1.textContent='contact with saler : 07953277';
  itemsLI1.appendChild(contactLi1);
  var addToCart1 = document.createElement('p');
  var AddButton1 = document.createElement('button');
  AddButton1.setAttribute('id', 'item1');
  AddButton1.textContent='Add TO Cart';
  AddButton1.setAttribute('class',`list`);
  itemsLI1.appendChild(addToCart1);
  addToCart1.appendChild(AddButton1);
  itemsList.appendChild(itemsLI1);
  /////
//// third item
  var itemsLI2 = document.createElement('li');
  itemsLI2.setAttribute('id','list2');
  var img2 = document.createElement('img');
  img2.setAttribute('src','../img/radio.jpg');
  img2.setAttribute('alt','radio');
  itemsLI2.appendChild(img2);
  var nameLi2 = document.createElement('p');
  nameLi2.textContent='Item Name : Radio';
  itemsLI2.appendChild(nameLi2);
  var priseLi2 = document.createElement('p');
  priseLi2.textContent='prise : 15jd';
  itemsLI2.appendChild(priseLi2);
  var contactLi2 = document.createElement('p');
  contactLi2.textContent='contact with saler : 07953277';
  itemsLI2.appendChild(contactLi2);
  var addToCart2 = document.createElement('p');
  var AddButton2 = document.createElement('button');
  AddButton2.setAttribute('id', 'item2');
  AddButton2.textContent='Add TO Cart';
  AddButton2.setAttribute('class',`list`);
  itemsLI2.appendChild(addToCart2);
  addToCart2.appendChild(AddButton2);
  itemsList.appendChild(itemsLI2);
  //////
  //// forth Item
  var itemsLI3 = document.createElement('li');
  itemsLI3.setAttribute('id','list3');
  var img3 = document.createElement('img');
  img3.setAttribute('src','../img/weels.png');
  img3.setAttribute('alt','weels');
  itemsLI3.appendChild(img3);
  var nameLi3 = document.createElement('p');
  nameLi3.textContent='Item Name : Weels';
  itemsLI3.appendChild(nameLi3);
  var priseLi3 = document.createElement('p');
  priseLi3.textContent='prise : 30jd';
  itemsLI3.appendChild(priseLi3);
  var contactLi3 = document.createElement('p');
  contactLi3.textContent='contact with saler : 07953277';
  itemsLI3.appendChild(contactLi3);
  var addToCart3 = document.createElement('p');
  var AddButton3 = document.createElement('button');
  AddButton3.setAttribute('id', 'item3');
  AddButton3.textContent='Add TO Cart';
  AddButton3.setAttribute('class',`list`);
  itemsLI3.appendChild(addToCart3);
  addToCart3.appendChild(AddButton3);
  
  itemsList.appendChild(itemsLI3);
///
  // var itemsLI4 = document.createElement('li');
  // itemsLI4.setAttribute('id','list4');
  // var img4 = document.createElement('img');
  // img4.setAttribute('src','../img/bilte.png');
  // img4.setAttribute('alt','bilte');
  // itemsLI4.appendChild(img4);
  // itemsList.appendChild(itemsLI4);
  // var itemsLI5 = document.createElement('li');
  // itemsLI5.setAttribute('id','list5');
  // var img5 = document.createElement('img');
  // img5.setAttribute('src','../img/assemblies.png');
  // img5.setAttribute('alt','assemblies');
  // itemsLI5.appendChild(img5);
  // itemsList.appendChild(itemsLI5);
  // var itemsLI6 = document.createElement('li');
  // itemsLI6.setAttribute('id','list6');
  // var img6 = document.createElement('img');
  // img6.setAttribute('src','../img/ShockAbsorber.jpg');
  // img6.setAttribute('alt','Absorber');
  // itemsLI6.appendChild(img6);
  // itemsList.appendChild(itemsLI6);
}




//calling events
// Add an event listener to the submit button

// for cart
var listSelector = document.querySelectorAll('.list');
for(var eventCount = 0;eventCount<listSelector.length;eventCount++){
  console.log(listSelector[eventCount]);
  console.log(listSelector.length);
  listSelector[eventCount].addEventListener('click',selectItem); 
  }
console.log(pickedArr);
// console.log(listSelector.length);







