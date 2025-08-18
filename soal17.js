let harga = prompt("Masukkan total harga barang:");

// ubah jadi number
harga = Number(harga);

if (harga >= 200000) {
  let diskon = harga * 0.075; // 7.5%
  let totalBayar = harga - diskon;

  console.log("Diskon: Rp" + diskon);
  console.log("Total yang harus dibayar: Rp" + totalBayar);
} else {
  console.log("Tidak ada diskon.");
  console.log("Total yang harus dibayar: Rp" + harga);
}
