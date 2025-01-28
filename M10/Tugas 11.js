// While
let n = 1;
while (n <= 5){
    console.log(n);
    n += 1;
}

// do While
let d = 3;
do {
    console.log(d);
    d++;
} while (d <= 5);

// for 
for (let a = 1; a <= 5; a++){
    console.log(a);
}

// continue
for (let t = 1; t <= 5; t++){
    if(t === 4) continue; 
    console.log(t);
}

// break
for (let contoh = 3; contoh <= 8; contoh++){
    if (contoh === 7) break; // 
    console.log(contoh);
}
