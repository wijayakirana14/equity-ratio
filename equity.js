var equityRatio;
var ketahananHari;
var totalRatio;
var totalKetahanan;

function calculateEquityRatio(equity, posisi) {
    equityRatio = (equity / (posisi * 300)) * 100;
    ketahananHari = Math.round(equity - (posisi * 33.3)) / (posisi * 10);

    // Mengembalikan kedua nilai equityRatio dan ketahananHari dalam bentuk objek
    return {
        totalRatio: equityRatio,
        totalKetahanan: ketahananHari
    };
}

var hasilEquityRatio = calculateEquityRatio(88, 1);
console.log("Total Ratio: " + hasilEquityRatio.totalRatio);
console.log("Total Ketahanan: " + hasilEquityRatio.totalKetahanan);


