//getAttribute - gets info about the attribute

let aTag = document.getElementById('google-link');

console.log(aTag.getAttribute('href'));

//setAttribute

aTag.setAttribute('href', 'https://www.google.com');
aTag.setAttribute('target', '_blank');

//removeAttribute

aTag.removeAttribute('class');

//createElement

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'My new h2 tag';

//appendChild

let bodyTag = document.getElementsByTagName('body')[0];

//bodyTag.appendChild(h2Tag);

let contentDiv = document.querySelector('.content');

//contentDiv.appendChild(h2Tag);

let h1Tag = document.createElement('h1');
h1Tag.innerHTML = 'New h1 title';
contentDiv.appendChild(h1Tag);

//insertBefore

//contentDiv.insertBefore(h1Tag, h2Tag); //insert BEFORE the h1Tag an h2Tag

//removeChild()

contentDiv.removeChild(h1Tag);

//clearing an element

//contentDiv.innerHTML = '';

//Events

let addButton = document.getElementById('add-item');

let ulTag = document.getElementById('item-list');

//let count = 1;

/* addButton.onclick = function () {
  let newLi = document.createElement('li');
  newLi.innerHTML = `Item number ${count}`;
  count++;
  ulTag.appendChild(newLi);
}; */

let todoInput = document.getElementById('todo');

addButton.onclick = function () {
  let newLi = document.createElement('li');
  newLi.innerHTML = todoInput.value;
  newLi.onclick = function (event) {
    console.log(event.currentTarget);
    alert(event.currentTarget.innerHTML);
  };
  todoInput.value = '';
  ulTag.appendChild(newLi);
};

let allLi = document.getElementsByTagName('li');

for (let i = 0; i < allLi.length; i++) {
  allLi[i].onclick = function (event) {
    console.log(event.currentTarget);
    alert(event.currentTarget.innerHTML);
  };
}
// target the ul

//inside the button onClick :
//create the li element
//change its content to be = item number 1/2/3...
//insert/append into the list
