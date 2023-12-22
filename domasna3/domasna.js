//? Da se kreira modul potpisano kako vaga.js - i da ima metodi kade shto kje konvertira grama vo kilogrami i obratno

const { g2k, k2g } = require('./vaga.js');

console.log("Grami vo kilogrami:")
console.log("8150 g = " + g2k(8150) + " kg");
console.log("4800 g = " + g2k(4800) + " kg");

console.log("Kilogrami vo grami:")
console.log("7.2 kg = " + k2g(7.2) + " g");
console.log("12 kg = " + k2g(12) + " g\n");

//? Da se kreira modul potpisan kako valuta - i da ima metodi koi sto kje konvertiraat evra vo denar, evra vo dolari, denari vo dolari i obratno

const { e2d, e2$, d2$, d2e, $2e, $2d } = require('./valuta.js');

console.log("Evra vo denari:")
console.log("3 euro = " + e2d(3).toFixed(2) + " denari");
console.log("20 euro = " + e2d(20).toFixed(2) + " denari");

console.log("Evra vo dolari:")
console.log("3 euro = " + e2$(3).toFixed(2) + " dollar");
console.log("20 euro = " + e2$(20).toFixed(2) + " dollar");

console.log("Denari vo dolari:")
console.log("500 denari = " + d2$(500).toFixed(2) + " dollar");
console.log("3000 denari = " + d2$(3000).toFixed(2) + " dollar");

console.log("Denari vo evra:")
console.log("500 denari = " + d2e(500).toFixed(2) + " euro");
console.log("3000 denari = " + d2e(3000).toFixed(2) + " euro");

console.log("Dolari vo evra:")
console.log("3 dollar = " + $2e(3).toFixed(2) + " euro");
console.log("20 dollar = " + $2e(20).toFixed(2) + " euro");

console.log("Dolari vo denari:")
console.log("3 dollar = " + $2d(3).toFixed(2) + " denari");
console.log("20 dollar = " + $2d(20).toFixed(2) + " denari\n");

//? Da se kreira modul po vasha zelba

const ekipi = [
    { ekipa: "Inter", pobedi: 13, neresheni: 2, porazi: 1, dadenoGolovi: 39, primanoGolovi: 7 },
    { ekipa: "Milan", pobedi: 10, neresheni: 2, porazi: 4, dadenoGolovi: 29, primanoGolovi: 18 },
    { ekipa: "Juventus", pobedi: 11, neresheni: 4, porazi: 1, dadenoGolovi: 24, primanoGolovi: 10 },
    { ekipa: "Roma", pobedi: 7, neresheni: 4, porazi: 5, dadenoGolovi: 28, primanoGolovi: 19 },
    { ekipa: "Frosinone", pobedi: 5, neresheni: 4, porazi: 7, dadenoGolovi: 21, primanoGolovi: 26 },
    { ekipa: "Genoa", pobedi: 4, neresheni: 4, porazi: 8, dadenoGolovi: 16, primanoGolovi: 21 },
    { ekipa: "Lazio", pobedi: 6, neresheni: 3, porazi: 7, dadenoGolovi: 16, primanoGolovi: 18 },
    { ekipa: "Lecce", pobedi: 4, neresheni: 8, porazi: 4, dadenoGolovi: 19, primanoGolovi: 21 },
    { ekipa: "Udinese", pobedi: 1, neresheni: 10, porazi: 5, dadenoGolovi: 14, primanoGolovi: 27 },
    { ekipa: "Napoli", pobedi: 8, neresheni: 3, porazi: 5, dadenoGolovi: 28, primanoGolovi: 19 },
    { ekipa: "Bologna", pobedi: 7, neresheni: 7, porazi: 2, dadenoGolovi: 20, primanoGolovi: 12 },
    { ekipa: "Verona", pobedi: 2, neresheni: 5, porazi: 9, dadenoGolovi: 13, primanoGolovi: 23 },
    { ekipa: "Atalanta", pobedi: 8, neresheni: 2, porazi: 6, dadenoGolovi: 28, primanoGolovi: 19 },
    { ekipa: "Fiorentina", pobedi: 8, neresheni: 3, porazi: 5, dadenoGolovi: 25, primanoGolovi: 18 },
    { ekipa: "Monza", pobedi: 5, neresheni: 6, porazi: 5, dadenoGolovi: 16, primanoGolovi: 17 },
    { ekipa: "Empoli", pobedi: 3, neresheni: 3, porazi: 10, dadenoGolovi: 10, primanoGolovi: 28 },
    { ekipa: "Torino", pobedi: 6, neresheni: 5, porazi: 5, dadenoGolovi: 14, primanoGolovi: 16 },
    { ekipa: "Salernitana", pobedi: 1, neresheni: 5, porazi: 10, dadenoGolovi: 12, primanoGolovi: 34 },
    { ekipa: "Sassuolo", pobedi: 4, neresheni: 4, porazi: 8, dadenoGolovi: 24, primanoGolovi: 30 },
    { ekipa: "Cagliari", pobedi: 3, neresheni: 4, porazi: 9, dadenoGolovi: 16, primanoGolovi: 29 }
]

const { points, goalDifference, tabela } = require('./tabela.js');
points(ekipi);
goalDifference(ekipi);
tabela(ekipi);

// 1. Inter          M: 16  P: 41  W: 13  D: 2  L: 1  GS/GC: 39:7  GD: 32
// 2. Juventus       M: 16  P: 37  W: 11  D: 4  L: 1  GS/GC: 24:10  GD: 14
// 3. Milan          M: 16  P: 32  W: 10  D: 2  L: 4  GS/GC: 29:18  GD: 11
// 4. Bologna        M: 16  P: 28  W: 7  D: 7  L: 2  GS/GC: 20:12  GD: 8
// 5. Napoli         M: 16  P: 27  W: 8  D: 3  L: 5  GS/GC: 28:19  GD: 9
// 6. Fiorentina     M: 16  P: 27  W: 8  D: 3  L: 5  GS/GC: 25:18  GD: 7
// 7. Atalanta       M: 16  P: 26  W: 8  D: 2  L: 6  GS/GC: 28:19  GD: 9
// 8. Roma           M: 16  P: 25  W: 7  D: 4  L: 5  GS/GC: 28:19  GD: 9
// 9. Torino         M: 16  P: 23  W: 6  D: 5  L: 5  GS/GC: 14:16  GD: -2
// 10. Lazio         M: 16  P: 21  W: 6  D: 3  L: 7  GS/GC: 16:18  GD: -2
// 11. Monza         M: 16  P: 21  W: 5  D: 6  L: 5  GS/GC: 16:17  GD: -1
// 12. Lecce         M: 16  P: 20  W: 4  D: 8  L: 4  GS/GC: 19:21  GD: -2
// 13. Frosinone     M: 16  P: 19  W: 5  D: 4  L: 7  GS/GC: 21:26  GD: -5
// 14. Genoa         M: 16  P: 16  W: 4  D: 4  L: 8  GS/GC: 16:21  GD: -5
// 15. Sassuolo      M: 16  P: 16  W: 4  D: 4  L: 8  GS/GC: 24:30  GD: -6
// 16. Udinese       M: 16  P: 13  W: 1  D: 10  L: 5  GS/GC: 14:27  GD: -13
// 17. Cagliari      M: 16  P: 13  W: 3  D: 4  L: 9  GS/GC: 16:29  GD: -13
// 18. Empoli        M: 16  P: 12  W: 3  D: 3  L: 10  GS/GC: 10:28  GD: -18
// 19. Verona        M: 16  P: 11  W: 2  D: 5  L: 9  GS/GC: 13:23  GD: -10
// 20. Salernitana   M: 16  P: 8  W: 1  D: 5  L: 10  GS/GC: 12:34  GD: -22