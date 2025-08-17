//soal no 6
// Akhdan X-PPLG-2

const prompt = require("prompt-sync")({ sigint: true })
let nama, nilai, kelulusan, sepatu;
nama = prompt("Nama : ");
sepatu = parseInt(prompt("Ukuran sepatu : "));
nilai = parseFloat(prompt("Nilai rapot : "));

console.log("____________________OUTPUT______________________")
console.log("Nama: " + nama);
console.log("Ukuran Sepatu: " + sepatu);
console.log("Nilai Raport: " + nilai);

if (nilai >= 85) {
    console.log("Kelulusan: " + true);
} else {
    console.log("Kelulusan: " + false);
}


  document.body.innerHTML = `
<P>"Halo"<p/>
      `;