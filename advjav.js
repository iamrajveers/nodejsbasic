console.log('Hello');
const a="abc";
const b=`Name: ${a} `
console.log(b)

const x = 5;
const y= 10;
console.log(`The sum is ${x + y}`); // Output: The sum is 15

// logic in template

const age = 20;
console.log(`your age:${age >=18 ? 'Adult':'young'}`)


// Variable interpolation means inserting the value of a variable directly into a string.
// interpolation lets you embed variables using ${}
//Expression evaluation in template literals means you can insert and evaluate any JavaScript expression inside the ${} placeholder.


// Arrow function -> short shortx of write function

let welcome=(name,age)=>{

    return `Hello Welcome Name:${name} Age: ${age}`
}
console.log(welcome("Ali",22));
console.log(typeof(welcome));


// rest opertor
//The rest operator (...) in JavaScript lets you gather multiple values into a single variable, usually as an array.


// Rest: 	Collect values into one

function sum(...numbers) {
    console.log(numbers); // [1, 2, 3, 4]
  }
  
  sum(1, 2, 3, 4);


  
// Spread:  Spread values out

// The spread operator helps you write cleaner, more readable, 

// and immutable code when working with collections of values.


// 1. To copy arrays or objects (without reference)


const original=[1,2,3];
const copy=[...original];

// 2. To merge arrays or objects

const a1 = [1, 2];
const b1 = [3, 4];
const merged = [...a1, ...b1]; // [1, 2, 3, 4]


// 3. To update specific values in objects immutably

const user = { name: "John", age: 25 };
const updatedUser = { ...user, age: 26 };



// Object literls
// Object literals are the simplest way to create objects in JavaScript using curly braces {}.

const student={
    name:"ali",
    age:12,  
}
console.log(student)



/* Destructuring an Array in JavaScript

Destructuring an array means extracting values from the array and assigning them to individual variables in one line */
  
const fruit=["apple","banana","cherry"]

// first, second, and third are just variable names — you can name them anything you want.
const [first,second,third]=fruit;

console.log(first)  // apple

//You can skip items using commas:

 const colors = ["red", "green", "blue"];

const [ , , thirdColor] = colors;

 console.log(thirdColor); // blue

// Use with default values:

const numbers = [10];
const [a2, b2 = 5] = numbers;
console.log(a2); // 10
console.log(b2); // 5 (default because index 1 was missing)


/*  Promise 
I will do something later (like fetch data), and when I’m done,
I’ll either give you the result or tell you if it failed."


🔁 Promise States:

1. Pending – still waiting for result

2. Fulfilled – operation completed successfully

3. Rejected – operation failed




resolve() → means success

reject() → means error


.then() → what to do if it worked

.catch() → what to do if it failed



🍔 Think of it like:

Ordering food at a restaurant:

You order → (starts the promise)

If food arrives → you enjoy it (then)

If something goes wrong → you complain (catch)


*/

const promise = new Promise((resolve, reject) => {
 
    let workDone = true;
    
    if (workDone) {
      resolve("Success");
    } else {
      reject("Something went wrong");
    }    
  });
  

  promise
    .then((message) => {
      console.log(message); // "Success"
    })
    .catch((error) => {
      console.log(error); // "Something went wrong"
    });
  


    


    