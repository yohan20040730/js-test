var barang = prompt(" pilihlah yang kamu mau\n (ketik angka yang kamu pilih)\n 1.roti\n 2.minuman gelas\n 3.snack")

switch (barang) {
    case "1":
        alert('roti didapatkan')
        break;
    case "2":  
        alert('minuman gelas didapatkan')
        break;
    case "3":  
        alert('snack didapatkan')
        break;    

    default: alert('tidak tersedia')
        break;
}