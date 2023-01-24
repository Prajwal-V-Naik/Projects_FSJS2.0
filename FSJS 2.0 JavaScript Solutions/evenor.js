function evenOr(num){
    if (num % 2 == 0){
        console.log(num +" is a even number");
    }
    else{
        console.log(num +" is not a even number");
    }
}

evenOr(3); // 3 is not a even number
evenOr(2); // 2 is a even number
evenOr(100000); // 100000 is a even number
evenOr(101010101); // 101010101 is not a even number