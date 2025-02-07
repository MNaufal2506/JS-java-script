//! deklarasi function
function calculateArea(length, width) {
    return length * width;
}




//! expresi function
let calculateArea2 = function (length, width) {
    return length * width;
}


//! arrow function
let calculateArea3 = (length, width) => {
    return length * width;  
}

//* pemanggilan
console.log(calculateArea(4, 3));
console.log(calculateArea2(5, 4));
console.log(calculateArea3(6, 5));




