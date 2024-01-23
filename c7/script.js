//! npm init -y
//?"start": "node index.js" - ova treba da se pishi vo package.json
//! npm run start -- se koristi da se startuva node aplikacijata
//* Povikuvanje na express frejmvorkot
const express = require('express');

//* Inicijalizacija na express aplikacijata
const app = express();

// Middleware za post objekti
app.use(express.urlencoded({ extended: true }));

app.get('/zdravo', (req, res) => {
    res.send('Zdravo svetu');
});

app.post('/zdravo', (req, res) => {
    res.send('Zdravo od post metoda');
});

app.get('/hello', (req, res) => {
    res.send('Hello world');
});

app.get('/zdravo/:ime/:prezime', (req, res) => {
    console.log(req.params);
    res.send(`Zdravo ${req.params.ime} ${req.params.prezime}`);
});

app.get('/calculator/:op/:a/:b', (req, res) => {
    console.log(req.params);
    // so switch da kreirate kalkulator
    switch(req.params.op){
        case 'sobiranje': 
            res.send(`${req.params.a} + ${req.params.b} = ${Number(req.params.a) + Number(req.params.b)}`);
            break;
        case 'odzemanje': 
            res.send(`${req.params.a} - ${req.params.b} = ${Number(req.params.a) - Number(req.params.b)}`);
            break;
        case 'mnozenje': 
            res.send(`${req.params.a} * ${req.params.b} = ${Number(req.params.a) * Number(req.params.b)}`);
            break;
        case 'delenje': 
            res.send(`${req.params.a} / ${req.params.b} = ${Number(req.params.a) / Number(req.params.b)}`);
            break;
        case 'ostatok': 
            res.send(`${req.params.a} % ${req.params.b} = ${Number(req.params.a) % Number(req.params.b)}`);
            break;
        default:
            res.send(`Nepostoecka operacija.`);
            break;
    }
});

app.post('/calculator', (req, res) => {
    console.log(req.body);
    switch(req.body.op){
        case 'sobiranje': 
            res.send(`${req.body.a} + ${req.body.b} = ${Number(req.body.a) + Number(req.body.b)}`);
            break;
        case 'odzemanje': 
            res.send(`${req.body.a} - ${req.body.b} = ${Number(req.body.a) - Number(req.body.b)}`);
            break;
        case 'mnozenje': 
            res.send(`${req.body.a} * ${req.body.b} = ${Number(req.body.a) * Number(req.body.b)}`);
            break;
        case 'delenje': 
            res.send(`${req.body.a} / ${req.body.b} = ${Number(req.body.a) / Number(req.body.b)}`);
            break;
        case 'ostatok': 
            res.send(`${req.body.a} % ${req.body.b} = ${Number(req.body.a) % Number(req.body.b)}`);
            break;
        default:
            res.send(`Nepostoecka operacija.`);
            break;
    }
});

//? da se kreira get ruta koja kje presmetuva bmi

app.get('/bmi/:weight/:height', (req, res) => {
    const kg = req.params.weight;
    const cm = req.params.height;
    return res.send(`${Number(kg) / Math.pow(Number(cm), 2) * 10000}`);
});

//? da se kreira post ruta koja kje presmetuva bmi

app.post('/bmi', (req, res) => {
    const kg = req.body.weight;
    const cm = req.body.height;
    return res.send(`${Number(kg) / Math.pow(Number(cm), 2) * 10000}`);
});

//? da se kreira konverter na pari koj kje kovertira eurotodollar, dollartoeuro, mkdtoeuro, eurotomkd so get i post metoda

app.get('/konverter/:kojaVoKojaValuta/:kolku', (req, res) => {
    const kojaVoKojaValuta = req.params.kojaVoKojaValuta;
    const kolku = req.params.kolku;
    switch(kojaVoKojaValuta){
        case 'eurotodollar':
            return res.send(`${kolku} euro = ${Number(kolku) * 1.08} dollar`);
        case 'dollartoeuro':
            return res.send(`${kolku} dollar = ${Number(kolku) / 1.08} euro`);
        case 'mkdtoeuro':
            return res.send(`${kolku} mkd = ${Number(kolku) * 0.016} euro`);
        case 'eurotomkd':
            return res.send(`${kolku} euro = ${Number(kolku) / 0.016} mkd`);
        default:
            return res.send('Error');
    }
});

app.post('/konverter', (req, res) => {
    const kojaVoKojaValuta = req.body.kojaVoKojaValuta;
    const kolku = req.body.kolku;
    switch(kojaVoKojaValuta){
        case 'eurotodollar':
            return res.send(`${kolku} euro = ${Number(kolku) * 1.08} dollar`);
        case 'dollartoeuro':
            return res.send(`${kolku} dollar = ${Number(kolku) / 1.08} euro`);
        case 'mkdtoeuro':
            return res.send(`${kolku} mkd = ${Number(kolku) * 0.016} euro`);
        case 'eurotomkd':
            return res.send(`${kolku} euro = ${Number(kolku) / 0.016} mkd`);
        default:
            return res.send('Error');
    }
});

//? da se kreira ruta koja kje presmetuva dali nekoe ime e parno neparno, kolku ima karakteri, samoglaski, soglaski so post metoda

app.post('/ime', (req, res) => {
    const ime = req.body.koeIme;
    const eParno = ime.length % 2 === 0 ? 'da' : 'ne';
    const samoglaski = ['a', 'e', 'i', 'o', 'u'];
    const bukviOdIme = ime.split('');
    let samoglaskiBroj = 0;
    for(let i = 0; i < ime.length; i++){
        if(samoglaski.includes(bukviOdIme[i])) samoglaskiBroj++;
    }
    const soglaskiBroj = ime.length - samoglaskiBroj;

    res.send(`ime: ${ime}, parno: ${eParno}, karakteri: ${ime.length}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`);
});

//? da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodvetno so mesecot so get i post metoda

app.get('/horoskop/:den/:mesec/:godina', (req, res) => {
    const den = req.params.den;
    const mesec = req.params.mesec;
    const godina = req.params.godina;
    if(Number(den) >= 21 && Number(den) <= 31 && Number(mesec) == 3 || Number(den) >= 1 && Number(den) <= 19 && Number(mesec) == 4) return res.send(`${den}/${mesec}/${godina} e Oven.`);

    else if(Number(den) >= 20 && Number(den) <= 30 && Number(mesec) == 4 || Number(den) >= 1 && Number(den) <= 20 && Number(mesec) == 5) return res.send(`${den}/${mesec}/${godina} e Bik.`);

    else if(Number(den) >= 21 && Number(den) <= 31 && Number(mesec) == 5 || Number(den) >= 1 && Number(den) <= 20 && Number(mesec) == 6) return res.send(`${den}/${mesec}/${godina} e Bliznaci.`);

    else if(Number(den) >= 21 && Number(den) <= 30 && Number(mesec) == 6 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 7) return res.send(`${den}/${mesec}/${godina} e Rak.`);

    else if(Number(den) >= 23 && Number(den) <= 31 && Number(mesec) == 7 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 8) return res.send(`${den}/${mesec}/${godina} e Lav.`);

    else if(Number(den) >= 23 && Number(den) <= 31 && Number(mesec) == 8 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 9) return res.send(`${den}/${mesec}/${godina} e Devica.`);

    else if(Number(den) >= 23 && Number(den) <= 30 && Number(mesec) == 9 || Number(den) >= 1 && Number(den) <= 23 && Number(mesec) == 10) return res.send(`${den}/${mesec}/${godina} e Vaga.`);

    else if(Number(den) >= 24 && Number(den) <= 31 && Number(mesec) == 10 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 11) return res.send(`${den}/${mesec}/${godina} e Skorpija.`);

    else if(Number(den) >= 23 && Number(den) <= 30 && Number(mesec) == 11 || Number(den) >= 1 && Number(den) <= 21 && Number(mesec) == 12) return res.send(`${den}/${mesec}/${godina} e Strelec.`);

    else if(Number(den) >= 22 && Number(den) <= 31 && Number(mesec) == 12 || Number(den) >= 1 && Number(den) <= 19 && Number(mesec) == 1) return res.send(`${den}/${mesec}/${godina} e Jarec.`);

    else if(Number(den) >= 20 && Number(den) <= 31 && Number(mesec) == 1 || Number(den) >= 1 && Number(den) <= 18 && Number(mesec) == 2) return res.send(`${den}/${mesec}/${godina} e Vodolija.`);

    else if(Number(den) >= 19 && Number(den) <= 28 && Number(mesec) == 2 || Number(den) >= 1 && Number(den) <= 20 && Number(mesec) == 3) return res.send(`${den}/${mesec}/${godina} e Ribi.`);

    else if(Number(den) == 29 && Number(mesec) == 2 && Number(godina) % 4 == 0) return res.send(`${den}/${mesec}/${godina} e Ribi.`);

    else return res.send('Nevaliden datum.');
});

app.post('/horoskop', (req, res) => {
    const den = req.body.den;
    const mesec = req.body.mesec;
    const godina = req.body.godina;
    if(Number(den) >= 21 && Number(den) <= 31 && Number(mesec) == 3 || Number(den) >= 1 && Number(den) <= 19 && Number(mesec) == 4) return res.send(`${den}/${mesec}/${godina} e Oven.`);

    else if(Number(den) >= 20 && Number(den) <= 30 && Number(mesec) == 4 || Number(den) >= 1 && Number(den) <= 20 && Number(mesec) == 5) return res.send(`${den}/${mesec}/${godina} e Bik.`);

    else if(Number(den) >= 21 && Number(den) <= 31 && Number(mesec) == 5 || Number(den) >= 1 && Number(den) <= 20 && Number(mesec) == 6) return res.send(`${den}/${mesec}/${godina} e Bliznaci.`);

    else if(Number(den) >= 21 && Number(den) <= 30 && Number(mesec) == 6 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 7) return res.send(`${den}/${mesec}/${godina} e Rak.`);

    else if(Number(den) >= 23 && Number(den) <= 31 && Number(mesec) == 7 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 8) return res.send(`${den}/${mesec}/${godina} e Lav.`);

    else if(Number(den) >= 23 && Number(den) <= 31 && Number(mesec) == 8 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 9) return res.send(`${den}/${mesec}/${godina} e Devica.`);

    else if(Number(den) >= 23 && Number(den) <= 30 && Number(mesec) == 9 || Number(den) >= 1 && Number(den) <= 23 && Number(mesec) == 10) return res.send(`${den}/${mesec}/${godina} e Vaga.`);

    else if(Number(den) >= 24 && Number(den) <= 31 && Number(mesec) == 10 || Number(den) >= 1 && Number(den) <= 22 && Number(mesec) == 11) return res.send(`${den}/${mesec}/${godina} e Skorpija.`);

    else if(Number(den) >= 23 && Number(den) <= 30 && Number(mesec) == 11 || Number(den) >= 1 && Number(den) <= 21 && Number(mesec) == 12) return res.send(`${den}/${mesec}/${godina} e Strelec.`);

    else if(Number(den) >= 22 && Number(den) <= 31 && Number(mesec) == 12 || Number(den) >= 1 && Number(den) <= 19 && Number(mesec) == 1) return res.send(`${den}/${mesec}/${godina} e Jarec.`);

    else if(Number(den) >= 20 && Number(den) <= 31 && Number(mesec) == 1 || Number(den) >= 1 && Number(den) <= 18 && Number(mesec) == 2) return res.send(`${den}/${mesec}/${godina} e Vodolija.`);

    else if(Number(den) >= 19 && Number(den) <= 28 && Number(mesec) == 2 || Number(den) >= 1 && Number(den) <= 20 && Number(mesec) == 3) return res.send(`${den}/${mesec}/${godina} e Ribi.`);

    else if(Number(den) == 29 && Number(mesec) == 2 && Number(godina) % 4 == 0) return res.send(`${den}/${mesec}/${godina} e Ribi.`);

    else return res.send('Nevaliden datum.');
});

//? da se kreira ruta koja kje presmetuva perimetar i plostina na pravoagolnik so poznati dve strani so get i post metoda

app.get('/strani/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    return res.send(`Perimetarot e ${2 * a + 2 * b}, ploshtinata e ${a * b}.`);
});

app.post('/strani', (req, res) => {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    return res.send(`Perimetarot e ${2 * a + 2 * b}, ploshtinata e ${a * b}.`);
});

//? da se kreira ruta koje kje presmetuva hipotenuza na triaglonik poznavajki gi dvete pomali strani so get i post metoda

app.get('/triagolnik/:a/:b', (req, res) => {
    const a = req.params.a;
    const b = req.params.b;
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return res.send(`Hipotenuzata e ${c}`);
});

app.post('/triagolnik', (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    return res.send(`Hipotenuzata e ${c}`);
});

//? da se kreira ruta koja kje presmetuva nekoj tekst kolku zborovi ima so post metoda

app.post('/tekst', (req, res) => {
    const tekst = req.body.tekst;
    return res.send(`Tekstot ima ${tekst.split(' ').length} zbora.`);
});

//* da se rekreira od node domasnata c6 domasna so express

app.get('/ime/:koeIme', (req, res) => {
    console.log(req.params);
    const ime = req.params.koeIme;
    const eParno = ime.length % 2 === 0 ? 'da' : 'ne';
    const samoglaski = ['a', 'e', 'i', 'o', 'u'];
    const bukviOdIme = ime.split('');
    let samoglaskiBroj = 0;
    for(let i = 0; i < ime.length; i++){
        if(samoglaski.includes(bukviOdIme[i])) samoglaskiBroj++;
    }
    const soglaskiBroj = ime.length - samoglaskiBroj;

    res.send(`ime: ${ime}, parno: ${eParno}, karakteri: ${ime.length}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`);
});

//* taa kreirana aplikacija e slushame na 10000 porta
app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log(`Server started succesfully on port 10000`);
});