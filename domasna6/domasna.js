//? Servis koj kje obrabotuva ruti od sledniot tip
//? 15 iminja po zelba
//? /ime/bojan

//? parno: ne, karakteri: 5, soglaski: 3, samoglaski: 2

const http = require('http');
const port = 3000;

const handler = (req, res) => {
    const [_, shto, ime] = req.url.split('/');
    let samoglaski = 0, soglaski = 0;
    // const imeSplit = ime.split('');
    if(typeof(ime) == 'string'){
        for(let i = 0; i < ime.length; i++){
            if(ime[i] == 'a' || ime[i] == 'e' || ime[i] == 'i' || ime[i] == 'o' || ime[i] == 'u') samoglaski++;
            else soglaski++;
        }
    }
    // let samoglaski = ime.reduce((acc, c) => {
    //     if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') acc + 1;
    // }, 0);
    // let soglaski = ime.reduce((acc, c) => {
    //     if(c != 'a' && c != 'e' && c != 'i' && c != 'o' && c != 'u') acc + 1;
    // }, 0);
    let parno = (samoglaski + soglaski) % 2 ? 'ne' : 'da';
    res.write(`ime: ${ime}, parno: ${parno}, karakteri: ${samoglaski + soglaski}, soglaski: ${soglaski}, samoglaski: ${samoglaski}`);
    res.end();
};

//? /ime/bojan - ime: bojan, parno: ne, karakteri: 5, soglaski: 3, samoglaski: 2
//? /ime/andrej - ime: andrej, parno: da, karakteri: 6, soglaski: 4, samoglaski: 2
//? /ime/jordan - ime: jordan, parno: da, karakteri: 6, soglaski: 4, samoglaski: 2
//? /ime/mirko - ime: mirko, parno: ne, karakteri: 5, soglaski: 3, samoglaski: 2
//? /ime/ana - ime: ana, parno: ne, karakteri: 3, soglaski: 1, samoglaski: 2
//? /ime/kasandra - ime: kasandra, parno: da, karakteri: 8, soglaski: 5, samoglaski: 3
//? /ime/marjan - ime: marjan, parno: da, karakteri: 6, soglaski: 4, samoglaski: 2
//? /ime/jovan - ime: jovan, parno: ne, karakteri: 5, soglaski: 3, samoglaski: 2
//? /ime/marijana - ime: marijana, parno: da, karakteri: 8, soglaski: 4, samoglaski: 4
//? /ime/vanco - ime: vanco, parno: ne, karakteri: 5, soglaski: 3, samoglaski: 2
//? /ime/elena - ime: elena, parno: ne, karakteri: 5, soglaski: 2, samoglaski: 3
//? /ime/viktor - ime: viktor, parno: da, karakteri: 6, soglaski: 4, samoglaski: 2
//? /ime/marija - ime: marija, parno: da, karakteri: 6, soglaski: 3, samoglaski: 3
//? /ime/liljana - ime: liljana, parno: ne, karakteri: 7, soglaski: 4, samoglaski: 3
//? /ime/hristijan - ime: hristijan, parno: ne, karakteri: 9, soglaski: 6, samoglaski: 3

const server = http.createServer(handler);

server.listen(port, '127.0.0.1', (err) => {
    if(err) console.log('error');
    console.log('Server started on port ' + port);
});