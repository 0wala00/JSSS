// Membuat function dengan parameter nama
function sapa(nama) {
  return "YO Whats ap " + nama + " Mantap";
}

// Contoh penggunaan function
const prompt = require("prompt-sync")({ sigint: true });
let inputNama = prompt("Masukan Nama : "); // gunakan prompt biasa, bukan parseInt
let hasil = sapa(inputNama);

// Tampilkan hasil
console.log(hasil);
