// Print a triangle pattern
for(let i = 1 ; i <= 3 ; i++){
    let row = '';
    for(let j = 1; j <= i; j++){
        row +="*";
    }
    console.log(row);
}
/* 

*
**
***

*/
console.log("-------------------------------------")
//  Print a square pattern
for(let i = 1 ; i <= 3 ; i++){
    let row2 = '';
    for(let j = 1; j <= 3; j++){
        row2 +="*";
    }
    console.log(row2);
}
/* 

***
***
***

*/
console.log("-------------------------------------")

// Print a pyramid pattern
for(let i = 1 ; i <= 3 ; i++){
    let row3 = "";
    for(let j = 1 ; j <= (3-i) ; j++){
        row3 +=" ";
    }
    for(let k = 1 ; k <= (2*i-1); k++){
        row3 +="*";
    }
    console.log(row3);
}
/* 

  *
 ***
*****

*/