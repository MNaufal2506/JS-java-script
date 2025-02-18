//! Soal 1: Data Penduduk (Object & Destructuring)

//* 1.1 Buat sebuah object bernama 'penduduk' yang menyimpan informasi di atas
let penduduk = {
    namaDepan: "Slamet",
    namaBelakang: "Santoso",
    umur: 45,
    pekerjaan: "petani",
}
console.log(penduduk);

//* 1.2 Properti Baru
penduduk.kota = 'Yogyakarta';
console.log(penduduk);

//* 1.3 Menampilkan nama belakang menggunakan destructuring
let {namaDepan, namaBelakang} = penduduk;
console.log(namaBelakang);

//* 1.4 Menampilkan pekerjaan menggunakan dot notation
console.log(penduduk.pekerjaan);


//! Soal 2: Buah Kesukaan (Array & Manipulasi Data)

let buahFavorit = ["Mangga", "Jeruk", "Apel"];
console.log(buahFavorit);
console.log(typeof buahFavorit);

//* 2.1 Menambahkan buah "Pisang" di daftar Buah Favorit pake metode yg benar
buahFavorit.push("Pisang");
console.log(buahFavorit);

//* 2.2 Mengganti buah "Jeruk" dengan "Anggur"
delete buahFavorit[1];
console.log(buahFavorit);

buahFavorit[1] = "Anggur"; 
console.log(buahFavorit);

//* 2.3 Menghapus buah terakhir
buahFavorit.pop();

//* 2.4 Mencetak daftar Buah Favorit
console.log(buahFavorit);

//! Soal 3: Menu Restoran (Map & Operasi Map)

//* 3.1 Menampilkan data menu restoran
let menuRestoran = new Map([
    ["Nasi Goreng", 15000],
    ["Mie Ayam", 13000],
    ["Es Teh Manis", 15000]
]);
console.log(menuRestoran);

//* 3.2 Menambahkan menu baru: "Ayam Bakar" dengan harga 2000
menuRestoran.set("Ayam Bakar", 2000);
console.log(menuRestoran);

//* 3.3 Menampilkan harga "Mie Ayam"
let getMenu = menuRestoran.get("Mie Ayam");
console.log(menuRestoran.get("Mie Ayam"));

//* 3.4 Menghapus menu "Es Teh Manis" dari daftar menu
menuRestoran.delete("Es Teh Manis");
console.log(menuRestoran);

//* 3.5 Mencetak menu yang tersisa
console.log(menuRestoran);



//! Soal 4: Klub Buku (Set & Operasi Set)

let koleksiBuku = new Set(["Laskar Pelangi", "Bumi", "Hujan"]);
console.log(koleksiBuku);

//* 4.1 Menambahkan buku "Filosofi Teras"
koleksiBuku.add("Filosofi Teras");
console.log(koleksiBuku);

//* 4.2 Mencoba menambahkan kembali "Bumi"
koleksiBuku.add("Bumi");
console.log(koleksiBuku);
// Tidak ada / Tidak bisa ditambahkan

//* 4.3 Menghapus buku "Hujan"
koleksiBuku.delete("Hujan");
console.log(koleksiBuku);

//* 4.4 Menampilkan koleksi buku yang baru
console.log(koleksiBuku);



//! Soal 5: Gabungan Data (Spread Operator)

let pakaianPria = ["Kemeja", "Celana Jeans", "Jaket"];
let pakaianWanita = ["Blouse", "Rok", "Cardigan"];

//* 5.1 Menggabungkan kedua array
let pakaianToko = [...pakaianPria, ...pakaianWanita];
console.log(pakaianToko);

//* 5.2 Menambahkan produk "kaos" ke dalam pakaian toko
pakaianToko = [...pakaianToko, "Kaos"];
console.log(pakaianToko);

//* 5.3 Mencetak isi dari pakaian toko
console.log(pakaianToko);



//! Soal 6: Pesanan Makanan (Rest Operator)

function pesanMakanan(...params) {
  console.log(params);
}
pesanMakanan("Nasi Goreng", "Sate Ayam", "Es Teh Manis");


