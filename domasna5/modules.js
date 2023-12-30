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