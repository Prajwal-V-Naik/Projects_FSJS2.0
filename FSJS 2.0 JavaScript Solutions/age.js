const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAge = ages.sort();
console.log(sortedAge); // [ 19, 19, 20, 22, 24, 24, 24, 25, 25, 26 ]
console.log(Math.min(...sortedAge)); // 19
console.log(Math.max(...sortedAge)); // 26


// Find the median age(one middle item or two middle items divided by two)
function median(sortedAge){
    let med = Math.floor(sortedAge.length / 2);
    if (sortedAge % 2 === 0){
        return (sortedAge[med - 1] + sortedAge[med] / 2);
    }
    else{
        return (sortedAge[med]);
    }
}
console.log(median(sortedAge)); //24


// Find the average age(all items divided by number of items)
function average (ages){
    let sum = ages.reduce((acc, curr) => acc + curr , 0);
    let avg = sum / ages.length;
    return avg;
}

console.log(average(ages)); // 22.8


// Find the range of the ages(max minus min)
function range(sortedAge){
    let rng = Math.max(...sortedAge) - Math.min(...sortedAge);
    return rng;
}
console.log(range(sortedAge)); // 7


// Compare the value of (min - average) and (max - average), use abs() method 
let absOfMinMinusAverage = Math.abs((Math.min(...sortedAge))-average(sortedAge));
console.log( "abs Of Min-Average is " + absOfMinMinusAverage);
let absOfMaxMinusAverage = Math.abs((Math.max(...sortedAge))-average(sortedAge));
console.log( "abs Of Max-Average is " + absOfMaxMinusAverage);

if(absOfMinMinusAverage > absOfMaxMinusAverage){
    console.log("The difference between min-average is greater than the difference between max-average")
}
else if (absOfMinMinusAverage < absOfMaxMinusAverage){
    console.log("The difference between min-average is less than the difference between max-average.")
}
else{
    console.log("The difference between min-average is equal to the difference between max-average.")
}