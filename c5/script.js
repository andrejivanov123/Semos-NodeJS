const readWrite = require('./readWrite.js');

(async() => {
    try{
        //* JSON = JavaScript Object Notation - najcesto se koristi za prenos na podatoci vo veb aplikacii
        //* E mnogu slicen so samiot JavaScript i programata moze lesno da konvertira json data vo native JavaScript Object
        const dataString = await readWrite.fileRead('./studenti.json');
        console.log(dataString);
        const studenti = JSON.parse(dataString);
        const sortedStudents = studenti.sort((a, b) => b.prosek - a.prosek);
        const bestStudent = sortedStudents[0];
        const worstStudent = sortedStudents[studenti.length - 1];
        console.log(sortedStudents);
        console.log(worstStudent);
        console.log(bestStudent);
        const zbirNaProseci = studenti.reduce((acc, c) => acc + c.prosek, 0);
        console.log((zbirNaProseci / studenti.length).toFixed(2));
        // studenti.push({ "ime": "Andrej", "grad": "Vinica", "prosek": 1});
        // console.log(studenti);
        // const write = await readWrite.fileWrite('./studenti1.json', JSON.stringify(studenti));
        // const write = await readWrite.fileWrite('./text.txt', 'Drugo neshto');
    } catch(err) {
        console.log(err);
    }
})();