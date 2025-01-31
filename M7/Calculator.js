function numberOne(param){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
console.log(param);

    let total = getElement + param;
    document.getElementById('hasil').innerText = total;

}

function numberTwo(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '2';
    document.getElementById('hasil').innerText = total;

}

function numberThree(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '3';
    document.getElementById('hasil').innerText = total;

}

function numberFour(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '4';
    document.getElementById('hasil').innerText = total;

}

function numberFive(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '5';
    document.getElementById('hasil').innerText = total;

}

function numberSix(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '6';
    document.getElementById('hasil').innerText = total;

}

function numberSeven(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '7';
    document.getElementById('hasil').innerText = total;

}

function numberEight(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '8';
    document.getElementById('hasil').innerText = total;

}

function numberNine(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '9';
    document.getElementById('hasil').innerText = total;

}

function numberZero(){
    let getElement = document.getElementById('hasil').innerHTML;
    if (getElement == '0'){
        getElement = '';
    }
    let total = getElement + '0';
    document.getElementById('hasil').innerText = total;

}

function tambah(){
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + ' + ';
    document.getElementById('hasil').innerHTML = total;
}

function kurang(){
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + ' - ';
    document.getElementById('hasil').innerHTML = total;
}

function bagi(){
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + ' : ';
    document.getElementById('hasil').innerHTML = total;
}

function kali(){
    let getElement = document.getElementById('hasil').innerHTML;
    let total = getElement + ' x ';
    document.getElementById('hasil').innerHTML = total;
}

function total(){
    let getElement = document.getElementById('hasil').innerHTML;
    console.log(getElement);

    // kondisi
    if(getElement.includes("+")){
    let parts = getElement.trim().split("+");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 + operand2;
    console.log(total);
    document.getElementById('hasil').innerHTML = total;
    } else if(getElement.includes("-")) {
    let parts = getElement.trim().split("-");
    console.log(parts);
    let operand1 = Number(parts[0]);
    let operand2 = Number(parts[1]);

    let total = operand1 - operand2;
    console.log(total);
    document.getElementById('hasil').innerHTML = total;
    } else if(getElement.includes("x")) {
        let parts = getElement.trim().split("x");
        console.log(parts);
        let operand1 = Number(parts[0]);
        let operand2 = Number(parts[1]);
    
        let total = operand1 - operand2;
        console.log(total);
        document.getElementById('hasil').innerHTML = total;
        } 
}