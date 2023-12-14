console.log("Welcome to Node.JS");
console.log(123);

// Funkcionalni Deklaracii
function sobirok(a, b){
    return a + b;
}

console.log(sobirok(2, 3));

// Funkcionalni Ekspresii
const proizvod = function(a, b){
    return a * b;
}

console.log(proizvod(1, 2));

// Fat Arrow Functions
const razlika = (a, b) => a - b;

console.log(razlika(6, 3));

// Methodi
const ucenik = {
    ime: "Trajan",
    pozdrav: function() {
        console.log(`Zdravo, ${this.ime}`);
    }
}

ucenik.pozdrav();

// IIFE - Immediately invoked function expressions
(function () {
    console.log("Ova e nashiot taen kod")
})();

//? Zadaca br 1
//? Da se kreira funkcionalna ekspresija so ime c2f koja kje konvertira celziusovi stepeni vo farenhajt

const c2f = function(n) {
    return 32 + n * 1.8;
}

console.log(c2f(-2)); // 28.4
console.log(c2f(5)); // 41
console.log(c2f(10)); // 50

//? Zadacha broj 2
//? Da se kreira Fat Arrow Function so ime f2c koja kje konvertira farenhajt vo celzius,
//? i koja vo megju vreme kje logira ako temperaturata e pod 0, kje logira deka temperaturata e niska,
//? od 0 do 22 stepeni kje logira deka temperaturata e nomrlana i nad 22 stepeni kje logira temperaturata e pokachena
//? NAPOMENA FUNCKIJATA TREBA DA GO VRATI BROJOT VO STEPENI

const f2c = farenhajt => {
    let celsius = Math.round((farenhajt - 32) / (9/5));
    // return `${celsius}, niska temperatura`;
    if(celsius < 0) return `${celsius}, niska temperatura`;
    else if(celsius >= 0 && celsius <= 22) return `${celsius}, normalna temperatura`;
    else return `${celsius}, pokachena temperatura`;
}

console.log(f2c(32)); // 0, normalna temperatura
console.log(f2c(25)); // -4, niska temperatura
console.log(f2c(90)); // 32, pokachena temperatura

//? Zadacha broj 3
//? Da se kreira metoda vo objekt kade shto objektot bi imal 2 parametri prviot bi bil broj 1 so nekakva vrednost i vtoriot parametar bi bil br 2, 
//? metodata bi se vikala zbir kade sto kje treba da gi soberi prviot i vtoriot parametar od ob

const ob = {
    br1: 3,
    br2: 5,
    zbir: function() {
        return this.br1 + this.br2;
    }
}

console.log(ob.zbir()); // 8