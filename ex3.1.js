// Async programming 3.1

/*
1. Using Callback
-----------------
We pass a method that the asynchronous method will call when the operation is complete. 
The method readChunk would be called like,

  readChunk(processData)

The implementation of readChunk would be something like this,

  function readChunk(callback){
    // start the async operation & return.
    // - when we get a notification that the operation is complete,
    // - check the status, 
    //    - on error throw an exception, otherwise,
    //    - call `callback(data)`
  }
*/

/** 
generates a random number [0,100) with a delay of 200ms.
See: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
*/
function getData(callback){
  setTimeout(
    () => callback(Math.round(Math.random() * 100)), 
    200
  )
}

console.log('Callback Implementation');

// Ex 3.1. Rewrite the code below using arrow function `(x) => code`
getData(function(n){
  console.log('Got some data:', n);
})

// Ex 3.2. Write a loop that prints out 10 items of data from getData.

console.log('will be processing data soon...');
