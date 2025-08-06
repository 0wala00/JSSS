// NAMA SAYA AKHDAN
const prompt = require("prompt-sync")({ sigint: true });
angka1 = (prompt('APAKAH ANDA YAKIN  : '));
if (angka1 == 'ya') {
    console.log(80.87);
}
else (false);
angka2 = (prompt('APAKAH ANDA YAKIN  : '));
if (angka2 == 'ya') {
    console.log(8.97);
}
else (false);

if
    (angka1 == 'ya' && angka2 == 'ya') {
    hasil = 80.87 + 8.97;
}
console.log(hasil);

if typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", function() {
        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = `<p>Hasil: ${hasil}</p>`;
    });
} {
    console.log("Output tidak dapat ditampilkan di HTML.");
}