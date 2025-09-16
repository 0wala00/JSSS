const prompt = require("prompt-sync")();

// deklarasi semua variabel di atas
let sisi, panjang, lebar, tinggi, jariJari, alas, tinggiSegitiga, tinggiPrisma, tinggiLimas;
let diagonal1, diagonal2, sisiMiring;
let luasAlas, kelilingAlas, luasSelubung, volume, luasPermukaan;

console.log("Pilih Salah Satu Untuk Menghitung");
console.log("a. Kubus");
console.log("b. Balok");
console.log("c. Prisma Segitiga");
console.log("d. Limas Segitiga");
console.log("e. Tabung");
console.log("f. Kerucut");
console.log("g. Bola");

let pilihan = prompt("Masukkan pilihan (a-g): ");

if (pilihan === "a") { // Kubus
    sisi = parseFloat(prompt("Masukkan sisi: "));
    volume = sisi ** 3;
    luasPermukaan = 6 * sisi ** 2;
    console.log(`Volume Kubus = ${volume}, Luas Permukaan = ${luasPermukaan}`);
}
else if (pilihan === "b") { // Balok
    panjang = parseFloat(prompt("Masukkan panjang: "));
    lebar = parseFloat(prompt("Masukkan lebar: "));
    tinggi = parseFloat(prompt("Masukkan tinggi: "));
    volume = panjang * lebar * tinggi;
    luasPermukaan = 2 * (panjang*lebar + panjang*tinggi + lebar*tinggi);
    console.log(`Volume Balok = ${volume}, Luas Permukaan = ${luasPermukaan}`);
}
else if (pilihan === "c") { // Prisma Segitiga
    alas = parseFloat(prompt("Masukkan alas segitiga: "));
    tinggiSegitiga = parseFloat(prompt("Masukkan tinggi segitiga: "));
    tinggiPrisma = parseFloat(prompt("Masukkan tinggi prisma: "));
    luasAlas = 0.5 * alas * tinggiSegitiga;
    kelilingAlas = 3 * alas;
    volume = luasAlas * tinggiPrisma;
    luasPermukaan = 2 * luasAlas + kelilingAlas * tinggiPrisma;
    console.log(`Volume Prisma Segitiga = ${volume}, Luas Permukaan = ${luasPermukaan}`);
}
else if (pilihan === "d") { // Limas Segitiga
    alas = parseFloat(prompt("Masukkan alas segitiga: "));
    tinggiSegitiga = parseFloat(prompt("Masukkan tinggi segitiga: "));
    tinggiLimas = parseFloat(prompt("Masukkan tinggi limas: "));
    luasAlas = 0.5 * alas * tinggiSegitiga;
    luasSelubung = 3 * (0.5 * alas * tinggiLimas);
    volume = (1/3) * luasAlas * tinggiLimas;
    luasPermukaan = luasAlas + luasSelubung;
    console.log(`Volume Limas Segitiga = ${volume}, Luas Permukaan = ${luasPermukaan}`);
}
else if (pilihan === "e") { // Tabung
    jariJari = parseFloat(prompt("Masukkan jari-jari: "));
    tinggi = parseFloat(prompt("Masukkan tinggi: "));
    volume = Math.PI * jariJari ** 2 * tinggi;
    luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);
    console.log(`Volume Tabung = ${volume.toFixed(2)}, Luas Permukaan = ${luasPermukaan.toFixed(2)}`);
}
else if (pilihan === "f") { // Kerucut
    jariJari = parseFloat(prompt("Masukkan jari-jari: "));
    tinggi = parseFloat(prompt("Masukkan tinggi: "));
    sisiMiring = Math.sqrt(jariJari ** 2 + tinggi ** 2);
    volume = (1/3) * Math.PI * jariJari ** 2 * tinggi;
    luasPermukaan = Math.PI * jariJari * (jariJari + sisiMiring);
    console.log(`Volume Kerucut = ${volume.toFixed(2)}, Luas Permukaan = ${luasPermukaan.toFixed(2)}`);
}
else if (pilihan === "g") { // Bola
    jariJari = parseFloat(prompt("Masukkan jari-jari: "));
    volume = (4/3) * Math.PI * jariJari ** 3;
    luasPermukaan = 4 * Math.PI * jariJari ** 2;
    console.log(`Volume Bola = ${volume.toFixed(2)}, Luas Permukaan = ${luasPermukaan.toFixed(2)}`);
}
else {
    console.log("Kamu tidak memilih pilihan diatas.");
}
