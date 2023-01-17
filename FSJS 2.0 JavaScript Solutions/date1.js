// The provided outputs are similar to the time when the code was written, so it displays the time when the code was run
// It means it took the current date(), meaning it was on time.

// - What is the year today?
let A = new Date();
let B = A.getFullYear();
console.log(B)
// Then Output be like:
// 2023


// - What is the month today as a number?
let C = A.getMonth();
console.log(C);
// Then Output be like:
// 0


//  - What is the date today?
let D = A.getDate();
console.log(D);
// Then Output be like:
// 17


// - What is the day today as a number?
let E = A.getDay();
console.log(E);
// Then Output be like:
// 2


// - What is the hours now?
let F = A.getHours();
console.log(F);
// Then Output be like:
// 9

// - What is the minutes now?
let G = A.getMinutes();
console.log(G);
// Then Output be like:
// 21

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let H = Date.now()/1000;
console.log(H);
// Then Output be like:
// 1673931265.838