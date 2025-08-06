

let addres = "Cianjur";
let kouta = 258;

console.log(addres);
console.log(kouta);

// Tampilkan data ke HTML
document.addEventListener("DOMContentLoaded", function() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>Alamat: ${addres}</p><p>Kouta: ${kouta}</p>`;
});