// NO.1
function greet () {
    console.log( "Hello, World!");
}
greet();


// NO.2
function showMessage(){
    let varLocalMessage =  "Ini adalah pesan lokal";    
    console.log(varLocalMessage);
}
showMessage();


// NO. 3
let userName = "Guest";
function varLuar (){
    console.log(userName);

    userName = "Admin"

    varLuar()
    console.log(userName);
}


// NO. 4


// NO. 5
function greet(name = "fulan ") 
{ console.log(`Hello, ${name}!`); } 
greet("fulan")


// NO. 6
function setUser(userName){
    userName ||= "Guest";
    console.log(userName); 
}
setUser("fulan");


// NO. 7
function add(one, two) {
    return one + two;
}
console.log(add(10, 7));
