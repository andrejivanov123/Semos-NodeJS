// fs
const fs = require('fs'); // modul za rabota so fajlovi

//! SYNC

const vchituvanjeNaTekst = fs.readFileSync('./text.txt', 'utf-8');
console.log(vchituvanjeNaTekst);
const podatok = `Ova sakame da go zapisheme vo nashiot kompjuter ${2 + 2}`;

fs.writeFileSync('./novTekst.txt', podatok);

// callback

function pozdrav(ime, callback){
    console.log(`Zdravo, ${ime}`);
    callback();
}

function chao(){
    console.log('Chao');
}

pozdrav('Mirko', chao);

//! ASYNC
fs.readFile('./text.txt', 'utf-8', (err, text) => {
    if(err) console.log('Ima greshka');
    console.log(`Async verzija ${text}`);
});

fs.writeFile('./asynhronWrite.txt', 'async text', 'utf-8', err => {
    console.log('uspesno');
})

console.log('test');

//! Promise patter

// // Step 1
// //* definirame ime na promis funkcijata
// const fileWrite = () => {};

// // Step 2
// //* funkcijata kje ni vrati nov promis
// const fileWrite = () => {
//     return new Promise();
// }

// // Step 3
// //* kje kreirame executor funkcija vo promisot
// const fileWrite = () => {
//     return new Promise(() => {});
// }

// // Step 4
// //* kje vneseme dva parametri success i fail koi se callback funkcii
// const fileWrite = () => {
//     return new Promise((success, fail) => {});
// }

// // Step 5
// //* kje ja zapisheme fs.fileWrite funkcijata vo egzekucionata funkcija
// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('data.txt', 'Hello world from node', 'utf-8', err => {
//             if(err) console.log(err);
//             console.log('Zapisot e napraven');
//         })
//     })
// }

// // Step 6
// //* vo ovoj slucaj ako imame err kje se aktivira fail funkcijata ako ne kje se aktivira success funkcijata
// const fileWrite = () => {
//     return new Promise((success, fail) => {
//         fs.writeFile('data.txt', 'Hello world from node', 'utf-8', err => {
//             if(err) return fail(err);
//             return success();
//         })
//     })
// }

// Step 7
//* kreiranje na modularna funkcija koja kje moze da funkcionira so parametri
const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, 'utf-8', err => {
            if(err) return fail(err);
            return success();
        })
    })
}

const fileRead = filename => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) return fail(err);
            return success(data);
        })
    })
}

const main = async() => {
    try{
        fileWrite('data1.txt', 'Nov fajl zapis od promise!');
        const primer = await fileRead('data1.txt');
        console.log(primer);
    } catch(err) {
        console.log(err);
    }
}

main();

//! Promisot moze da bide
// Pending: inicijalna sostojba, ne e ni ispolnet i odbien promisot
// Fulfilled ili success: Oznacuva deka operacijata zavrshila uspeshno
// Rejected ili fail: Zavrshila so greshka

const imenik = [
    { ime: "Pero Peroski", telefon: 223305},
    { ime: "Janko Jankovski", telefon: 232305},
    { ime: "Stanko Stankovski", telefon: 222555}
]

const jsonFile = async() => {
    try {
        const imenikData = JSON.stringify(imenik);
        await fileWrite('imenik.json', imenikData);
        let dataString = await fileRead('imenik.json');
        let data = JSON.parse(dataString);
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}

jsonFile();

// unlink

const deleteFile = filename => {
    return new Promise((success, fail) => {
        fs.unlink(filename, err => {
            if(err) return fail(err);
            return success();
        })
    })
}

const DF = async() => {
    try{
        await deleteFile('./delete.txt');
    } catch(err) {
        console.log(err);
    }
}

DF();