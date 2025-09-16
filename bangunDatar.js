const prompt = require("prompt-sync")();

// deklarasi semua variabel di atas
let sisi, panjang, lebar, alas, tinggi, sisiB, sisiC, sisiMiring;
let sisiAtas, sisiBawah, sisiD, diagonal1, diagonal2, sisiP, sisiQ, jariJari;
let luas, keliling;

console.log("Pilih Salah Satu Untuk Menghitung");
console.log("a. Persegi");
console.log("b. Persegi Panjang");
console.log("c. Segitiga");
console.log("d. Jajar Genjang");
console.log("e. Trapesium");
console.log("f. Belah Ketupat");
console.log("g. Layang-layang");
console.log("h. Lingkaran");

let pilihan = prompt("Masukkan pilihan (a-h): ");

if (pilihan === "a") { // Persegi
    sisi = parseFloat(prompt("Masukkan sisi: "));
    luas = sisi ** 2;
    keliling = 4 * sisi;
    console.log(`Luas Persegi = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "b") { // Persegi Panjang
    panjang = parseFloat(prompt("Masukkan panjang: "));
    lebar = parseFloat(prompt("Masukkan lebar: "));
    luas = panjang * lebar;
    keliling = 2 * (panjang + lebar);
    console.log(`Luas Persegi Panjang = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "c") { // Segitiga
    alas = parseFloat(prompt("Masukkan alas: "));
    tinggi = parseFloat(prompt("Masukkan tinggi: "));
    sisiB = parseFloat(prompt("Masukkan sisi b: "));
    sisiC = parseFloat(prompt("Masukkan sisi c: "));
    luas = 0.5 * alas * tinggi;
    keliling = alas + sisiB + sisiC;
    console.log(`Luas Segitiga = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "d") { // Jajar Genjang
    alas = parseFloat(prompt("Masukkan alas: "));
    tinggi = parseFloat(prompt("Masukkan tinggi: "));
    sisiMiring = parseFloat(prompt("Masukkan sisi miring: "));
    luas = alas * tinggi;
    keliling = 2 * (alas + sisiMiring);
    console.log(`Luas Jajar Genjang = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "e") { // Trapesium
    sisiAtas = parseFloat(prompt("Masukkan sisi atas: "));
    sisiBawah = parseFloat(prompt("Masukkan sisi bawah: "));
    tinggi = parseFloat(prompt("Masukkan tinggi: "));
    sisiC = parseFloat(prompt("Masukkan sisi c: "));
    sisiD = parseFloat(prompt("Masukkan sisi d: "));
    luas = 0.5 * (sisiAtas + sisiBawah) * tinggi;
    keliling = sisiAtas + sisiBawah + sisiC + sisiD;
    console.log(`Luas Trapesium = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "f") { // Belah Ketupat
    diagonal1 = parseFloat(prompt("Masukkan diagonal 1: "));
    diagonal2 = parseFloat(prompt("Masukkan diagonal 2: "));
    sisi = parseFloat(prompt("Masukkan sisi: "));
    luas = 0.5 * diagonal1 * diagonal2;
    keliling = 4 * sisi;
    console.log(`Luas Belah Ketupat = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "g") { // Layang-layang
    diagonal1 = parseFloat(prompt("Masukkan diagonal 1: "));
    diagonal2 = parseFloat(prompt("Masukkan diagonal 2: "));
    sisiP = parseFloat(prompt("Masukkan sisi p: "));
    sisiQ = parseFloat(prompt("Masukkan sisi q: "));
    luas = 0.5 * diagonal1 * diagonal2;
    keliling = 2 * (sisiP + sisiQ);
    console.log(`Luas Layang-layang = ${luas}, Keliling = ${keliling}`);
}
else if (pilihan === "h") { // Lingkaran
    jariJari = parseFloat(prompt("Masukkan jari-jari: "));
    luas = Math.PI * jariJari ** 2;
    keliling = 2 * Math.PI * jariJari;
    console.log(`Luas Lingkaran = ${luas.toFixed(2)}, Keliling = ${keliling.toFixed(2)}`);
}
else {
    console.log("Kamu tidak memilah salah satu di atas");
}
