// soal 10
// Akhdan X-PPLG-2


const prompt = require("prompt-sync")({ sigint: true });
let buku, penerbit, jumlahBuku, tanggalPembelian;
buku = prompt("Masukkan nama buku: ");
penerbit = prompt("Masukkan nama penerbit: ");  
jumlahBuku = parseInt(prompt("Masukkan jumlah buku: "));
tanggalPembelian = prompt("Masukkan tanggal pembelian (DD/MM/YYYY): ");
console.log(`Buku: ${buku}`);
console.log(`Penerbit: ${penerbit}`);
console.log(`Jumlah Buku: ${jumlahBuku}`);
console.log(`Tanggal Pembelian: ${tanggalPembelian}`);  
