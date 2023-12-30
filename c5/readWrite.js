const fs = require('fs');

exports.fileRead = filename => {
    return new Promise((succ, fail) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err) return fail(err);
            return succ(data);
        })
    })
}

exports.fileWrite = (filename, data) => {
    return new Promise((succ, fail) => {
        fs.writeFile(filename, data, 'utf-8', err => {
            if(err) return fail(err);
            return succ();
        })
    })
}

exports.fileDelete = filename => {
    return new Promise((succ, fail) => {
        fs.unlink(filename, err => {
            if(err) return fail(err);
            return succ();
        })
    })
}

// const fr = async() => {
//     try{
//         let primer = await fileRead('./studenti.json')
//         console.log(primer);
//     } catch(err) {
//         console.log(err);
//     }
// }

// fr();

// module.exports = {
//     fileWrite,
//     fileRead,
//     fileDelete
// }