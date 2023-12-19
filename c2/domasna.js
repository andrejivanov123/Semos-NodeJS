//? DOMASNA ZADACHA
const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
];

//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)

function func1(studenti){
    let arr = [];
    for(let i = 0; i < studenti.length; i++){
        const { ime, prosek, grad } = studenti[i];
        if(grad == 'Skopje' && prosek > 7 && ime.charAt(ime.length - 1) == 'a'){
            arr.push(studenti[i]);
        }
    }
    return arr.sort((a, b) => a.ime - b.ime);
}

console.log(func1(studenti));

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki

function func2(studenti){
    let arr = [];
    for(let i = 0; i < studenti.length; i++){
        const { ime, prosek, grad } = studenti[i];
        if(grad != 'Skopje' && prosek > 9){
            arr.push(studenti[i]);
        }
    }
    return arr.sort((a, b) => b.prosek - a.prosek);
}

console.log(func2(studenti));

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek

function func3(studenti){
    let arr = [], br = 0;
    for(let i = 0; i < studenti.length; i++){
        const { ime, prosek, grad } = studenti[i];
        if(ime.length == 5){
            arr.push(studenti[i]);
            br++;
        }
        if(br == 3) break;
    }
    return arr.sort((a, b) => b.prosek - a.prosek);
}

console.log(func3(studenti));

//? 4. Vkupen prosek na studenti koi se od Kumanovo

function func4(studenti){
    let arr = [];
    for(let i = 0; i < studenti.length; i++){
        const { ime, prosek, grad } = studenti[i];
        if(grad == 'Kumanovo'){
            arr.push(prosek);
        }
    }
    return arr.reduce((acc, s) => acc + s, 0);
}

console.log(func4(studenti));

//? 5. Prosek na prosecite od gradovite Skopje i Ohrid

// Ohrid nema :)

function func5(studenti){
    let arr = [];
    for(let i = 0; i < studenti.length; i++){
        const { ime, prosek, grad } = studenti[i];
        if(grad == 'Skopje' || grad == 'Ohrid'){
            arr.push(prosek);
        }
    }
    return arr.reduce((acc, s) => acc + s, 0) / arr.length;
}

console.log(func5(studenti));

//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica

studenti.push({ ime: 'Goran', prosek: 8.3, grad: 'Strumica' });
console.log(studenti);

//? 7. Da se izbrishe prviot student vo studenti

studenti.shift();
console.log(studenti);

//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)

const newArray = studenti.filter(student => student.grad == 'Ohrid' || student.grad == 'Skopje' || student.grad == 'Kumanovo').map(student => ({ ime: student.ime, prosek: student.prosek + 1, grad: student.grad}));
console.log(newArray);
