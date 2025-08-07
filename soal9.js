//soal 9
// Akhdan X-PPLG-2

const prompt = require("prompt-sync")({ sigint: true });
let p, l, Luas, Keliling;
p = parseInt(prompt("Masukkan panjang: "));
l = parseInt(prompt("Masukkan lebar: "));
Luas = p * l
Keliling = 2 * (p + l)

console.log(`Luas Persegi Panjang: ${Luas.toLocaleString()} cm²`);
console.log(`Keliling Persegi Panjang: ${Keliling.toLocaleString()} cm`);