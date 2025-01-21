// No.1
let nilaiMTK = 91;
let nilaiIPA = 81;
let nilaiIPS = 91;

console.log(nilaiMTK && nilaiIPA);
console.log(nilaiMTK && nilaiIPS);


if (nilaiMTK >= 91 && nilaiIPA >= 91 && nilaiIPS >= 91) {
    console.log('Lulus')
} else {
    console.log('Tidak Lulus')
}

// No.2
console.log(nilaiMTK || nilaiIPA);
console.log(nilaiMTK || nilaiIPS);


if (nilaiMTK >= 91 || nilaiIPA >= 91 || nilaiIPS >= 91) {
    console.log('Lulus')
} else {
    console.log('Tidak Lulus')
}

// No.3
let saklar = true;

if (saklar) {
    console.log('hidup');
    
} else {
    console.log('mati');
    
}

