// ? Zadaca 1: Da se kreira kalkulator koj shto kje sobira, odzema, mnozi i deli so upotreba na switch
// ? Pojasnuvanje da se kreira funkcija so switch

function calc(br1, br2, sign){
    switch(sign){
        case '+': return br1 + br2;
        break;
        case '-': return br1 - br2;
        break;
        case '*': return br1 * br2;
        break;
        case '/': return br1 / br2;
        break;
        default: return 'Greska';
    }
}

console.log(calc(5, 3, '+'));
console.log(calc(5, 3, '-'));
console.log(calc(5, 3, '*'));
console.log(calc(5, 3, '/'));
console.log(calc(5, 3, 'l'));

// TYPEOF

console.log(typeof undefined); // undefined
console.log(typeof 230); // number
console.log(typeof 'Type'); // string
console.log(typeof null); // object
console.log(typeof '23'); // string
console.log(typeof +'23'); // number
console.log(console.log); // [Function: log]
console.log(typeof false); // boolean

// BOOLEAN - TRUE, FALSE

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean('0')); // true
console.log(Boolean(+'0')); // false
console.log(Boolean(1)); // true
console.log(2 == '2'); // true
console.log(!true); // false

// || i &&

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// Ternary operators

let godini = 26;
let polnoleten = godini >= 18 ? "Polnoleten" : "Ne polnoleten";
console.log(polnoleten);

// Working with arrays

let array1 = [5, 2, 4, 6, 7];

//? Zadaca 2: Da se logira sekoj broj poedinecno

for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

//? Zadaca 3: Prazen array da se napolni so site elementi od array1 + 1

let array2 = array1.map(n => n + 1);
console.log(array2);

// for loops

for(let i = 0; i > 0; i++){
    console.log(i);
} // nisto nema da se izvrsi

// Implementacija na gotovi higher-order functions vo JS
// map, forEach, reduce, filter i sort

// forEach

let test = [1, 2, 3, 4, 5, 6];

// test.forEach((item, index) => console.log(item));
test.forEach((item, index, array) => (array[index] = item + 10));
console.log(test);



// map

const test2 = [3, 6, 2, 1, 20];
const test3 = test2.map(n => n + 10);
const test4 = test2.map((item, index) => index + 10);
console.log(test3);
console.log(test4);



// reduce - reducira/namaluva/sumira niza na eden edinstven rezultat

// console.log(test2.reduce((acc, s) => {return acc + s}, 0));

const reduceRezultat = test2.reduce((acc, s) => acc + s, 0);
console.log(reduceRezultat);



// sort - sortira elementi vo niza spored dadena funkcija za sortiranje

test2.sort((a, b) => a - b); // ascending
test2.sort((a, b) => b - a); // descending
console.log(test2);



// filter

const testFilter = test2.filter(item => item > 5)
console.log(testFilter);



// find - vrakja element od nizata koj odgovara na postaveniot uslov

const testFind = test2.find(item => item == 4);
console.log(testFind);



// kopiranje na array
array1 = [2, 1, 3, 5];
array2 = [20, 10, 30, 50];
const array3 = [...array1, ...array2];
console.log(array3);

const obj1 = {
    item1: 'First',
    item2: 'Second'
}

const newObject = {
    ...obj1,
    item3: 'Third'
}

console.log(newObject);

// Destruction(razlozuvanje) of Array

const arra1 = [1, 2, 3];
const [a, b, c] = arra1;
console.log(c);

// Destruction of Objects

const myObject = {produkt: "Smoki", cena: 120}
const { produkt: novoIme, cena } = myObject;
console.log(novoIme, cena);