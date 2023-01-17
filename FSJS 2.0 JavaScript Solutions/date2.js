// Create a human readable time format using the Date time object

// - YYYY-MM-DD HH:mm
var date = new Date();
var A = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
console.log(A);
// Then Output be like:
// 2023-1-17 17:50

// - DD-MM-YYYY HH:mm
var B = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
console.log(B);
// Then Output be like:
// 17-1-2023 17:50

// - DD/MM/YYYY HH:mm
var C = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes();
console.log(C);
// Then Output be like:
// 17/1/2023 17:50

