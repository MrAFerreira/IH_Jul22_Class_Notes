//Promises
//Async code

/* const myPromise = new Promise((resolve, reject) => {
  if(/* condition ){
    resolve(/* return value )
  } else {
    reject(/* reason )
  }
}) */

// 3 states - Pending, resolved, rejected

const pendingPromise = new Promise((resolve, reject) => {});
const resolvedPromise = Promise.resolve(42);
//const rejectedPromise = Promise.reject('We rejected the promise.');

/* console.log(pendingPromise);
console.log(resolvedPromise);
console.log(rejectedPromise); */

const names = ['André', 'Xico', 'Diogo', 'Carolina'];

function obtainNames(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log(names[count]);

      if (!names[count]) reject('Name not found');
      else resolve(names[count]);
    }, 1000);
  });
}

//then only happens if the promise was reolved
//catch only happens when a promise is rejected

/* obtainNames(4)
  .then((name) => console.log(name))
  .catch((err) => console.log(err)); */

/* obtainNames(0)
  .then(() => obtainNames(1))
  .then(() => obtainNames(2))
  .then(() => obtainNames(3))
  .then(() => obtainNames(4))
  .catch((err) => console.log(err));
 */

/* const pr3 = new Promise((resolve, reject) => {
  throw new Error('Rejected by throwing an error');
  resolve(42)
});

pr3
.then((value) => console.log(value))
.catch((err) => console.log(err)); */

/* const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('A'), 2000);
});

pr4
  .then((value1) => {
    console.log('value1:', value1);
    return 'B';
  })
  .catch((err) => console.log('this error refers to the first then'))
  .then((value2) => {
    console.log('value2:', value2);
    return 'C';
  })
  .then((value3) => {
    console.log('value3:', value3);
    return 'D';
  })
  .catch((err) => console.log(err));
 */
/* const pr5 = new Promise((resolve, reject) => {
  throw new Error('Failed code');
}); */

/* pr5
  .then((value) => value)
  .then((value) => value)
  .then((value) => value)
  .then((value) => value)
  .then((value) => value)
  .then((value) => value)
  .then((value) => value)
  .then((value) => console.log('hello there'))
  .catch((err) => console.log(err)); */

//finally -runs no matter what

/* const pr6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Ironhack'), 2000);
});

pr6
  .then((value) => console.log(value, '1 .then()'))
  .then(() => Promise.reject('Something went wrong'))
  .then(() => console.log('3 .then()'))
  .catch((err) => console.log(err))
  .finally(() => console.log('.finally()'));
 */
//1 then
//something went wrong
//finally

/* const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Xico'), 1000);
});
const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Diogo'), 2000);
});
const thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject('Carolina'), 3000);
}); */

//Promise.all

/* Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((values) => console.log(values))
  .catch((err) => console.log(err)); */

//Async await

/* async function getNames(){

} */

// try / catch block

const getNames = async () => {
  try {
    let username = await obtainNames(0);
    let secondName = await obtainNames(1);
    await obtainNames(2);
    await obtainNames(4);
    console.log(username);
    console.log(secondName);
  } catch (err) {
    console.log(err);
  }
};

getNames();
