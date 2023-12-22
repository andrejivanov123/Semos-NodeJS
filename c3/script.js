//!1. core moduli
//* http - za kreiranje i krauvanje so server
//* assert - se koristi za testiranje i debagiranje
//* fs(file system) - za interakcija so datotocen sistem na nashiot kompjuter
//* path - so ova ja utvrduvame patekata na nashiot direktorium
//* process - process ni dava informacii so koi procesi nashata aplikacija raboti
//* os - ni dava informacii za koj operativen sistem se naogja nashata nodejs aplikacija

//!2. - localni moduli
//* ovie moduli nie kje gi kreirame
// const kalkulator = require('./kalkutor.js');
const { sobiranje, odzemanje, mnozenje, delenje } = require('./kalkutor.js');
// console.log(kalkulator.sobiranje(2, 3));
console.log(sobiranje(2, 3));

//!3. third-party moduli
//* express - e biblioteka koja ni ovozmozuva da kreirame web servisi
//* mongoose e biblioteka koja ni ovozmozuva da vrshime interakcija so data baza
//* dotenv, ejs, morgan .......


