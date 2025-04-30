
// Understanding the Event Loop in Node.js

// Node.js works in an event-driven, non-blocking I/O model.

//  This means that Node.js can handle many tasks at once without
 // getting "stuck" waiting for one task to finish.


console.log('Start');

setTimeout(() => {
  console.log('This is an async message!');
}, 2000); // waits 2 seconds (2000 ms)

console.log('End');
