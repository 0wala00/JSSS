//SOAL 12
//AKHDAN X-PPLG-2


const prompt = require("prompt-sync")({ sigint: true });
let sisi, volume, luasPermukaan;

sisi = parseFloat(prompt("Masukkan jari-jari bola: "));

luasPermukaan = 4 * Math.PI * sisi ** 2;
volume = (4 / 3) * Math.PI * sisi ** 3;
console.log("Luas Permukaan Bola: " + luasPermukaan.toLocaleString());
console.log("Volume Bola: " + volume.toLocaleString());