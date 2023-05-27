// Async programming 3.2 - Promises

/*
2. Using Promise
----------------
Promise provides a mechanism to simplify cascading callbacks -- 
callbacks inside callbacks inside ...

Async methods can now return a value -- a Promise that will eventually
be resolved. Promise instance methods can be used to retrieve the 
resolved value (using a callback -- in JS using callbacks is a normal 
way to program.)

If getData returns a promise, then you can can rewrite the code as,

  getData().then((val) => console.log('got: ', val))

The `then` instance method calls the method that you pass in as soon, as 
the promise is resolved. Until then, the Promise may only have an unresolved 
value.

Notice how this is equivalent to,

  const p = getData();
  p.then((value) => console.log('got:', val) );


Learn all about Promises: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/

console.log('Promise Implementation');

function getData(){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(Math.round(Math.random() * 100)),
      200
    )
  });
}

getData().then((data) => console.log('Got data:', data));
console.log('Waiting for promised data ...');

// Ex 3.2.1. Write a loop to generate an array of 10 data elements using `getData()`
let dataElements = [];
// See array methods to add items: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// your code ...


// Ex. 3.2.2 When is dataElements array ready? Write a loop to print out all the items in `dataElements`