//get by id

let branchDiv = document.getElementById('branch');

console.log(branchDiv);

//innerHTML
branchDiv.innerHTML = 'This is a branch';
//branchDiv.innerHTML = '<p>Hello there</p>';

branchDiv.style.border = '4px solid brown';
branchDiv.style.backgroundColor = 'green';

const changeColor = (element) => {
  if (element.style.backgroundColor === 'green') {
    element.style.backgroundColor = 'yellow';
  } else {
    element.style.backgroundColor = 'green';
  }
};

//setInterval(changeColor, 1000, branchDiv);

//get by class name
//returns an array like object

let leaves = document.getElementsByClassName('leaf');
console.log(leaves);

const randomNumbers = () => {
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].innerHTML = Math.floor(Math.random() * 10) + 1;
  }
};

//setInterval(randomNumbers, 500);

//get by tag name
//returns an array-like object

let divs = document.getElementsByTagName('div'); // <- also returns an array-like object

console.log(divs);

let bodyTag = document.getElementsByTagName('body')[0];
//body
console.log(bodyTag);

//querySelector
//returns the first element with the specified query

let firstLeaf = document.querySelector('.leaf');
console.log(firstLeaf);

//querySelectorAll
//return an array of all elements that fulfill the criteria

let allDivs = document.querySelectorAll('.leaf, #branch');
console.log(allDivs);

// Classname - to read the class
let twigDiv = document.querySelector('.twig');

//classList - add(), remove(), toggle()

twigDiv.classList.add('leaf'); //adds a class to the element
twigDiv.classList.toggle('twig'); //toggles a class - if it exists it removes it
twigDiv.classList.toggle('fruit'); //if it doesn't exist it adds

twigDiv.classList.remove('leaf'); // removes the class

console.log(twigDiv.className);

//console.log(branchDiv.id);

// create a .dark class on css with background-color #444 and color white
// toggle the .dark class on the body every second (using classList.toggle())

setInterval(() => {
  //This is what toggle is doing in the background
  /*    if(bodyTag.className !== 'dark'){
    bodyTag.classList.add('dark');
  }else{
    bodyTag.classList.remove('dark')
  } */

  bodyTag.classList.toggle('dark');
}, 1000);
