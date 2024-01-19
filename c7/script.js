//! npm init -y
//?"start": "node index.js" - ova treba da se pishi vo package.json
//! npm run start -- se koristi da se startuva node aplikacijata
//* Povikuvanje na express frejmvorkot
const express = require('express');

//* Inicijalizacija na express aplikacijata
const app = express();

app.get('/zdravo', (req, res) => {
    res.send('Zdravo svetu');
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

    res.send(`ime: ${req.params.koeIme}, parno: ${eParno}, karakteri: ${ime.length}, soglaski: ${soglaskiBroj}, samoglaski: ${samoglaskiBroj}`);
});

//* taa kreirana aplikacija e slushame na 10000 porta
app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log(`Server started succesfully on port 10000`);
});