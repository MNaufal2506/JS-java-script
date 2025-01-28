// While
let n = 1;
while (n <= 10){
    console.log(n);
    n += 1;
}

// do While
let d = 10;
do {
    console.log(d);
    d--;
} while (d >= 1);

// for 
for (let a = 2; a <= 20; a += 2 ){
    console.log(a);
}

// continue
for (let t = 1; t <= 10; t++){
    if(t === 5) continue; 
    console.log(t);
}

// break
for (let contoh = 1; contoh <= 10; contoh++){
    if (contoh === 6) break; // 
    console.log(contoh);
}
