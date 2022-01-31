var jmlAngkot = 10;
var angkotActive = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotActive) {
        console.log('Angkot No.' + noAngkot + ' beroprasi dengan baik');
    }
    else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot No.' + noAngkot + ' sedang lembur');
    }
    // else if (noAngkot === 10 ) {
    //     console.log('Angkot No.' + noAngkot + ' sedang lembur');
    // }
    else {
        console.log('Angkot No.' + noAngkot + ' sedang tidak beroprasi');
    }
}