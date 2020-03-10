'use strict';
function getItemCart() {
    var storedItem = localStorage.getItem('picked');
    if (localStorage.newItem) {
      itemsArray = JSON.parse(storedItem);
    //   renderNewItem();
    }
  }
  getItemCart();


//   console.log(itemsArray);

var table= document.getElementById('table');

for(var i=0; i < itemsArray.length ; i++){

    var trEl = document.createElement('tr');
    var trELempty = document.createElement('td')
    trELempty.textContent=' ';
    trEl.appendChild(trELempty);

    var tdEl = document.createElement('td');
    var img = document.createElement('img');
    img.setAttribute('src',itemsArray[i].itemPhoto)

    tdEl.appendChild(img);
    trEl.appendChild(tdEl);

    var tdEl2 = document.createElement('td');

    tdEl2.textContent=itemsArray[i].itemName;
    trEl.appendChild(tdEl2);

    var tdEl3 = document.createElement('td');

    tdEl3.textContent=itemsArray[i].prise;
    trEl.appendChild(tdEl3);

    var tdEl4 = document.createElement('td');

    tdEl4.textContent=itemsArray[i].phone;
    trEl.appendChild(tdEl4);

    var tdEl5 = document.createElement('td');
    var deleteB =document.createElement('button');
    deleteB.textContent='Remove';
    tdEl5.appendChild(deleteB);
    trEl.appendChild(tdEl5);

    table.appendChild(trEl);

}