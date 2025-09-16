// soal11.js
// Akhdan X-PPLG-2

const prompt = require("prompt-sync")({ sigint: true });
let x_rpl_1, x_rpl_2, x_tkj_1, x_tkj_2;

//siswa kelas X RPL 1, X RPL 2, X TKJ 1, dan X

console.log("MASUKAN JUMLAH SISWa MaSING MASING JURUSAN");
x_rpl_1 = parseInt(prompt("Jumlah siswa X RPL 1: "));
x_rpl_2 = parseInt(prompt("Jumlah siswa X RPL 2: "));   
x_tkj_1 = parseInt(prompt("Jumlah siswa X TKJ 1: "));
x_tkj_2 = parseInt(prompt("Jumlah siswa X TKJ 2: "));
let total_siswa = x_rpl_1 + x_rpl_2 + x_tkj_1 + x_tkj_2;
console.log(`TOTAL SISWA SMAKXIE: ${total_siswa}`);

