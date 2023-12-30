//? student [ime, prezime, prosek, grad]
//?1 Dodavanje na student od fajlot
//?2 Brishenje na student od fajlot
//?3 Menuvanje na podatooci na student od fajlot
//?4 Chitanje na site studenti od fajlot

//? - treba da dodademe student vo fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da vide zachuvan vo fajlot | fs.writeFile

//? - Imeto na studentt treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinify
//? 5. Tekstot treba da vide zachuuvan fo fajlot | fs.writeFile

//? - Treba da se izbrishe student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obicchen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile

const readWrite = require('./modules.js');

//?1 Dodavanje na student od fajlot

(async() => {
    try{
        const fr = await readWrite.fileRead('./studenti.json');
        // console.log(fr);
        const studenti = JSON.parse(fr);
        // studenti.push({ "ime": "Andrej", "prezime": "Ivanov", "grad": "Vinica", "prosek": 1 });
        // console.log(studenti);
        const studentiString = JSON.stringify(studenti);
        // await readWrite.fileWrite("./studenti.json", studentiString);
    } catch(err) {
        console.log(err);
    }
})();



//?2 Brishenje na student od fajlot

(async() => {
    try{
        const fr = await readWrite.fileRead('./studenti.json');
        // console.log(fr);
        const studenti = JSON.parse(fr);
        const studentiFilter = studenti.filter(student => student.ime != 'Vlatko');
        // console.log(studentiFilter);
        const studentiString = JSON.stringify(studentiFilter);
        // console.log(studentiString);
        // await readWrite.fileWrite('./studenti.json', studentiString);
    } catch(err) {
        console.log(err);
    }
})();



//?3 Menuvanje na podatooci na student od fajlot i 4 Chitanje na site studenti od fajlot

(async() => {
    try{
        const fr = await readWrite.fileRead('./studenti.json')
        // console.log(fr);
        const studenti = JSON.parse(fr);
        studenti.map(student => {
            if(student.ime == "Marko") student.ime = "Vasko";
        });
        const studentiString = JSON.stringify(studenti);
        await readWrite.fileWrite('./studenti.json', studentiString);
        console.log(await readWrite.fileRead('./studenti.json'));
    } catch(err) {
        console.log(err);
    }
})();