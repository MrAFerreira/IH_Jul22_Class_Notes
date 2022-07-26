let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('André'), 1000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Xico'), 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Diogo'), 3000);
});

let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Carolina'), 4000);
});

/* let step0 = obtainInstructions('brusselSprouts', 0)
let step1 = obtainInstructions('brusselSprouts', 1)
let step2 = obtainInstructions('brusselSprouts', 2)
 */
Promise.all([step0, step1, step2]).then((values) => {
  values.forEach((step) => {
    document.querySelector('#brusselSprouts').innerHTML += `<li>${step}</li>`;
  });
});

//Promise all
/* Promise.all([promise1, promise2, promise3, promise4])
  //['André', 'Xico', 'Diogo', 'Carolina']
  .then((allValues) => console.log(allValues))
  .catch((err) => console.log(err)); */

/* 
promise1
  .then((element) => {
    console.log(element);
    return promise2;
  })
  .then((value2) => {
    console.log(value2);
    return promise3;
  })
  .then((value3) => {
    console.log(value3);
    return promise4;
  })
  .then((value4) => {
    console.log(value4);
  })
  .catch((err) => console.log(err)) */

/*   async function myFunc(){

  }
 */
/* const myAsync = async () => {
  try {
    let lastName = await promise4;
    await promise1;

    console.log(lastName);
    console.log('hello');
  } catch (error) {
    console.log(error);
  }
};

myAsync(); */
