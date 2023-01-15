// Truthy values
// 1) A non-empty string
let str1 = "Hey this Prajwal";
if (str1) {
    console.log(`The value of str is truthy, and value is ${str1}`);
} else {
    console.log("The value of str is falsy.");
}
// Then Output be like:
// The value of str is truthy, and value is Hey this Prajwal

// 2) A non-zero number
let num1 = 3;
if (num1) {
    console.log(`The value of num is truthy, and value is ${num1}`);
} else {
    console.log("The value of num is falsy.");
}
// Then Output be like:
// The value of num is truthy, and value is 3

// 3)The boolean value true
let bool1 = true;
if (bool1) {
    console.log(`The value of bool is truthy: ${bool1}`);
} else {
    console.log("The value of bool is falsy.");
}
// Then Output be like:
// The value of bool is truthy: true

// Falsy values
// 1) A empty string
let str2 = '';
if (str2) {
    console.log(`The value of str is truthy, and value is ${str2}`);
} else {
    console.log("The value of str is falsy.");
}
// Then Output be like:
// The value of str is falsy.

// 2) A zero number
let num2 = 0;
if (num2) {
    console.log(`The value of num is truthy, and value is ${num2}`);
} else {
    console.log("The value of num is falsy.");
}
// Then Output be like:
// The value of num is falsy

// 3)The boolean value false
let bool2 = false;
if (bool2) {
    console.log(`The value of bool is truthy: ${bool2}`);
} else {
    console.log("The value of bool is falsy.");
}
// Then Output be like:
// The value of bool is falsy.