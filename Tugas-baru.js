const prompt = require('prompt-sync')({ sigint: true });

let x, y, z, k, j;

x = Number(prompt("Masukkan nilai x: "));
y = Number(prompt("Masukkan nilai y: "));
z = Number(prompt("Masukkan nilai z: "));

k = x + y + z;
j = x * y * z;

console.log("Nilai k adalah " + k);
console.log("Nilai j adalah " + j);