let nama = prompt("Masukkan nama siswa:");
let nilai = Number(prompt("Masukkan nilai (0-100):"));

let grade;

if (nilai >= 90 && nilai <= 100) {
  grade = "A";
} else if (nilai >= 80) {
  grade = "B";
} else if (nilai >= 70) {
  grade = "C";
} else if (nilai >= 60) {
  grade = "D";
} else {
  grade = "E";
}

console.log("Siswa:", nama);
console.log("Nilai:", nilai);
console.log("Grade:", grade);
