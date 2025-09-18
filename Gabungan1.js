const prompt = require("prompt-sync")({ sigint: true });

while (true) {
console.log("___ ꓥ _________HASIL__________Pilih soal yang ingin dijalankan: - - - - - - - - - - - - - ");
console.log("    |")
console.log("    |")

console.log("1. Soal (for loop 'Cerdas'🗻)");
console.log("2. Soal (array 'Cerdas')");
console.log("3. Soal (gabung array buah)");
console.log("4. Soal (jumlahkan array nomer)");
console.log("5. Soal (Jumlah dengan operator)                                 AKHDAN PRAJADISA😜");
console.log("6. Soal (Penjumlahan Menurun)                                            /");
console.log("7. Soal (Penjumlahan Ganjil)                                            /   ");
console.log("8. Soal (Penjumlahan genap)                                            /    ");
console.log("9. soal (If Nested🗿)                                                 V")
console.log("10. soal (aaaaaaaaa)")
console.log("                                                                 11. soal (Bintang atas)")
console.log("                                                                12. soal (Bintang bawah)")
console.log("                                                           13. soal (Ketupat sapotong😑)")
console.log("                                            14. soal (masih ketupat sepotong tpi beda😑)")
console.log("                                                                       15. soal (Pirmit)")
console.log("                                                                 16. soal (ketupat full)")
console.log("                                                               17. soal (huruf abjad x5)")

let pilihan = prompt("Masukkan pilihan (1-20): ");


switch (pilihan) {
    case "1":
        // SOAL 1
for (let i = 1; i <= 5; i++) {
            console.log("Cerdas");
        }
        break;
    case "2":
        // SOAL 2
    let text =""
for (let b = 1; b <=5; b++){
        text += " Cerdas"   
    }
    console.log(text);
        break;
    case "3":
        // SOAL 3
    let Thomas = ["A", "B", "C", "D"];
for(let i = 0;i < Thomas.length;i++){
            console.log(Thomas[i] + ". Cerdas");
        }
        break;
    case "4":
        // SOAL 4
        let total = 0;
        let jarak = " ";
        const nomer = [1, 2, 3, 4, 5]; 
for (let i = 0; i < nomer.length; i++) {
            total += nomer[i];
        }
        let urutan = "";
for (let y = 1; y <=5; y++){
            urutan += y;
        }
        console.log(`${urutan}  ${total}`);
        break;
    case "5":
        let cobawe ="";
        let remukenBarudak = 0;
 for (let t = 1; t <= 5; t++){
        remukenBarudak += t,cobawe += t + " + "
        }
        console.log(`${cobawe} = ${remukenBarudak}`)
        console.log("Coba coba Berhadiah 😎🔥🚀")
        break;
    case "6":
        let ngariung = 0;
for (let g = 1; g <=5;g++){
            console.log(g), ngariung += g
        }
        console.log("---+");
        console.log(ngariung);
        break;
    case "7":
        
        let penjabaran = "";
        let ngahiji = 0;
        for (let q = 1; q <= 5; q+=2){
        ngahiji += q, penjabaran += q +" + "
        }  
        console.log(`${penjabaran} = ${ngahiji}`)
        break;
    case "8":
        let tampil = "";
        let persatuanNKRI = 0;
for (let s = 2; s <= 10; s+=2){
        persatuanNKRI += s, tampil += s +" + "
        }  
        console.log(`${tampil} = ${persatuanNKRI}`)
        break;
    case "9":
for (let i = 1; i <= 5; i++) {
        let text = "";
for (let b = 1; b <= 5; b++) {
        text += b + " ";
         }
      
        console.log(text);
            }
        break;
    case "10":
       let yoyo = "";{
for (let u = 1; u <= 5; u++) {
            yoyo += "a";}
for (let p=0 ; p <= 5; p++) {
            console.log(yoyo)
        }
       }
        break;
    case "11":
for (let z = 1; z <= 5; z++){
            let tempat ="";
for (let a = 1; a <= z; a++){
            tempat += "*"
        }
        console.log(tempat)
        }
      
        break;
    case "12":
                for (let k = 5; k >= 1; k--){
            let wadah ="";
for (let s = 1; s <= k; s++){
            wadah += "*"
        }
        console.log(wadah)
        }
    
    break;
    case "13":
for (let z = 1; z <= 5; z++){
            let piring ="";
for (let a = 1; a <= z; a++){
            piring += "*"
        }
        console.log(piring)
        }
for (let k = 4; k >= 1; k--){
            let mangkok ="";
for (let s = 1; s <= k; s++){
            mangkok += "*"
        }
        console.log(mangkok)
        }
    break;
    case "14":
        for (let p = 1; p <= 4; p++){
            let atas ="";
for (let l = 1; l <= p; l++){
            atas += "*"
        }
        console.log(atas)
        } console.log("*******");
                for (let kj = 4; kj >= 1; kj--){
            let bawah ="";
for (let sj = 1; sj <= kj; sj++){
            bawah += "*"
        }
        console.log(bawah)
        }
   
    break;
    case "15":

 for (let v = 1; v <= 5; v++) {
    let langkah = "";
    let deratan = "";
    
for (let n = 1; n <= 5 - v; n++) {
        langkah += " ";
    }
for (let c = 1; c <= v ; c++) {
        deratan += "* ";
    }
   
    console.log(langkah + deratan);
}

    break;
    case "16":
        //belum terlalu paham
    let tinggi = 5;
for (let vx = 1; vx <= tinggi; vx++) {
    let langkahx = "";
    let deratanx = "";

for (let nx = 1; nx <= tinggi - vx; nx++) {
        langkahx += " ";
    }
for (let cx = 1; cx <= vx; cx++) {
        deratanx += "* ";
    }

    console.log(langkahx + deratanx);
}


for (let vy = tinggi - 1; vy >= 1; vy--) {
    let langkahy = "";
    let deratany = "";

for (let ny = 1; ny <= tinggi - vy; ny++) {
        langkahy += " ";
    }
for (let cy = 1; cy <= vy; cy++) {
        deratany += "* ";
    }

    console.log(langkahy + deratany);
}

    break;

    case "17":
       
   let penampung = "";

for (let D = 1; D <= 5; D++){
            penampung += "a";
        }
        console.log(penampung);

        let penampung2 = "";

for (let D = 1; D <= 5; D++){
            penampung2 += "b";
        }
        console.log(penampung2);
   
        let penampung3 = "";

for (let D = 1; D <= 5; D++){
            penampung3 += "c";
        }
        console.log(penampung3);
    
        let penampung4 = "";

for (let D = 1; D <= 5; D++){
            penampung4 += "d";
        }
        console.log(penampung4);
    
        let penampung5 = "";

for (let D = 1; D <= 5; D++){
            penampung5 += "e";
        }
        console.log(penampung5);
    
            
        break;

}
}


