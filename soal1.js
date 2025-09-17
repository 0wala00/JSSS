const prompt = require("prompt-sync")({ sigint: true });

console.log("Pilih soal yang ingin dijalankan:");
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
    for (let b = 0; b <=5; b++){
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
     
        const nomer = [1, 2, 3, 4, 5]; 
        for (let i = 0; i < nomer.length; i++) {
            total += nomer[i];
        }
        let urutan = "";
        for (let y = 1; y <=5; y++){
            urutan += y;
        }
        console.log(`${urutan} ${total}`);
        break;
    case "5":
        //soal 5
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
        for (let z = 1; z <= 5; z++) {          // loop baris
            let baris = "";
            for (let r = 1; r <= z; r++) {      // loop kolom
                baris += "* ";                  // tambahkan bintang
            }
            console.log(baris); 
        }
        break;
    case "12":
        for (let p = 5; p >= 1 ; p--) {          // loop baris
            let satu = "";
            for (let x = 1; x <= p; x++) {      // loop kolom
                satu += "* ";                  // tambahkan bintang
            }
            console.log(satu);
        
    }
        break;
    case "13":
       for (let c = 1; c <= 4; c++) {          // loop baris
         let space1 = "";
        for (let l = 1; l <= c; l++) {      // loop kolom
            space1 += "* ";  }                // tambahkan bintang
            
                    console.log(space1);
        }
         for (let g = 5; g >= 1 ; g--) {          // loop baris
            let space2 = "";
            for (let k = 1; k <= g; k++) {      // loop kolom
                space2 += "* ";                  // tambahkan bintang
            }
            console.log(space2);
        }

        break;
    case "14":
        for (let n = 1; n <= 4; n++) {          // loop baris
         let space3 = "";
        for (let y = 1; y <= n; y++) {      // loop kolom
            space3 += "* ";  }                // tambahkan bintang
            
              console.log(space3);
        }
        let tengah = "";
        for (let v = 1;v <= 7; v++){
            tengah += "* ";   
        }
        console.log(tengah);

         for (let j = 4; j >= 1 ; j--) {          // loop baris
            let space4 = "";
            for (let b = 1; b <= j; b++) {      // loop kolom
                space4 += "* ";                  // tambahkan bintang
            }
            console.log(space4);
        }
        break;
    case "15":
        // Piramida naik
        var tinggi15 = 5;
        for (let i = 1; i <= tinggi15; i++) {
            let baris = "";
            // spasi
            for (let s = 1; s <= tinggi15 - i; s++) {
                baris += " ";
            }
            // bintang
            for (let b = 1; b <= 2 * i - 1; b++) {
                baris += "*";
            }
            console.log(baris);
        }
        break;
    case "16":
            var tinggi15 = 5;
        for (let i = 1; i <= tinggi15; i++) {
            let baris1 = "";
            // spasi
            for (let s = 1; s <= tinggi15 - i; s++) {
                baris1 += " ";
            }
            // bintang
            for (let b = 1; b <= 2 * i - 1; b++) {
                baris1 += "*";
            }
            console.log(baris1);
        // Piramida turun
        var tinggi16 = 5;
        for (let i = tinggi16; i >= 1; i--) {
            let baris2 = "";
            // spasi
            for (let s = 1; s <= tinggi16 - i; s++) {
                baris2 += " ";
            }
            // bintang
            for (let b = 1; b <= 2 * i - 1; b++) {
                baris2 += "*";
            }
            console.log(baris2);
        }
        break;
}
}
