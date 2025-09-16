const prompt = require("prompt-sync")({ sigint: true });


for (let i = 2009; i < 2026; i++) {
    console.log(i);
}


for (let i = 1; i < 16; i += 2) {
    console.log(i);
}

for (let i = 0; i < 17; i += 2) {
    console.log(i);
}

for (let i = 10; i < 80; i += 10) {
    console.log(i);
}

for (let i = 10; i > 0; i -= 1) {
    console.log(i);
}


const pengali = parseInt(prompt("Masukkan angka pengali: "));
for (let i = 1; i <= 10; i++) {
    console.log(`pengali ${pengali} x ${i} = ${pengali * i}`);
}



