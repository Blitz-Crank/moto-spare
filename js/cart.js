'use strict';
function getItemCart() {
    var storedItem = localStorage.getItem('picked');
    if (localStorage.newItem) {
      pickedArr = JSON.parse(storedItem);
    //   renderNewItem();
    }
  }
  getItemCart();


//   console.log(itemsArray);

var table= document.getElementById('table');

for(var i=0; i < pickedArr.length ; i++){

    var trEl = document.createElement('tr');
    trEl.setAttribute('id',`tr${i}`)
    var trELempty = document.createElement('td')
    trELempty.textContent=' ';
    trEl.appendChild(trELempty);

    var tdEl = document.createElement('td');
    var img = document.createElement('img');
    img.setAttribute('src',pickedArr[i].itemPhoto)

    tdEl.appendChild(img);
    trEl.appendChild(tdEl);

    var tdEl2 = document.createElement('td');

    tdEl2.textContent=pickedArr[i].itemName;
    trEl.appendChild(tdEl2);

    var tdEl3 = document.createElement('td');

    tdEl3.textContent=pickedArr[i].prise;
    trEl.appendChild(tdEl3);

    var tdEl4 = document.createElement('td');

    tdEl4.textContent=pickedArr[i].phone;
    trEl.appendChild(tdEl4);

    var tdEl5 = document.createElement('td');
    var deleteB =document.createElement('button');
    deleteB.setAttribute('id', `${i}`);
    deleteB.setAttribute('class', `butt`);
    
    deleteB.textContent='X';
    tdEl5.appendChild(deleteB);
    trEl.appendChild(tdEl5);

    table.appendChild(trEl);

}
var buttSelctor = document.querySelectorAll('.butt');

for (var j = 0; j < buttSelctor.length; j++) {
  // console.log(buttSelctor[j]);
  // console.log(buttSelctor.length);
  buttSelctor[j].addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target.id);
    var buttTarget = event.target;
    console.log(itemsArray[Number(buttTarget.id.substring(0))]);
    console.log((buttTarget.id.substring(0)));
    if (buttTarget.id ===`${Number(buttTarget.id.substring(0))}`){
    var willremoved = document.getElementById(`tr${Number(buttTarget.id.substring(0))}`);
      willremoved.innerHTML = ''
    // pickedArr.push(itemsArray[Number(buttTarget.id.substring(0))]);
    // setItemCart();
    // console.log(pickedArr);

    }
  });
}