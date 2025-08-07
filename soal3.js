
//soal no 3
// Akhdan X-PPLG-2

let addres = "Cianjur";
let kouta = 258;


if (typeof window === "undefined") {
  // Node.js (terminal)
  const prompt = require("prompt-sync")({ sigint: true });
  let a = parseInt(prompt("1 Terminal, 2 Web: "));
  switch (a) {
    case 1:
      console.log(addres);
      console.log(kouta);
      break;
    case 2:
      console.log("Jalankan di browser untuk mode web!");
      break;
    default:
      console.log("Input tidak valid");
  }
} else {
  // Browser (HTML)
  let a = parseInt(window.prompt("1 Terminal, 2 Web: "));
  switch (a) {
    case 1:
      document.body.innerHTML = `<p>Jalankan di terminal untuk mode console!</p>`;
      break;
    case 2:
      document.body.innerHTML = `
        <p>adres: ${addres}<br>
        kouta: ${kouta}</p>
      `;
      break;
    default:
      document.body.innerHTML = `<p>Input tidak valid</p>`;
  }
}