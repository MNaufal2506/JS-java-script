//! deklarasi function
function calculateArea(length, width) {
    return length * width;
}

//! expresi function
let calculateArea2 = function (params) {
    console.log('calculateArea2');
}

//! arrow function
let calculateArea3 = (params) => {
    console.log('calculateArea3');  
}

//* pemanggilan
calculateArea2();
calculateArea3();




