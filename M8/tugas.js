/// No.1
// Metode if...else Statement
let nilaiUjianSusulanITAndi = 81;

if (nilaiUjianSusulanITAndi >= 90) {
    console.log('Grade A');
} else if (nilaiUjianSusulanITAndi >= 80) {
    console.log('Grade B');
} else if (nilaiUjianSusulanITAndi >= 70) {
    console.log('Grade C');
} else {
    console.log('Grade D');
}

// Metode Ternary (Multiple ?)
let hasilNilaiUjianSusulanITAndi = 81;
hasilNilaiUjianSusulanITAndi >= 90 ? console.log('Grade A'): //if 
hasilNilaiUjianSusulanITAndi >= 80 ? console.log('Grade B'): // else if
hasilNilaiUjianSusulanITAndi >= 70 ? console.log('Grade C'): // else if
console.log('Grade D');


/// No.2
let nuruddinMauBeliBuah = nangka;
switch (nuruddinMauBeliBuah) {
    case "chery":
        console.log("buah chery");
        break;
    case "nangka":
        console.log("buah nangka");
        break;
    case "salak":
        console.log("buah salak");
        break;
    default:
        console.log("Nurudin tidak membeli buah apapun")
}