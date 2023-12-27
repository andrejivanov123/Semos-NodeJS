const fs = require('fs');
const path = require('path');

const append = (filename, data) => {
    return new Promise((success, fail) => {
        fs.appendFileSync(filename, data, 'utf-8', err => {
            if(err) return fail(err);
            return success();
        })
    })
}

function unlink(filename) {
    return new Promise((success, fail) => {
        fs.unlink(filename, err => {
            if(err) return fail(err);
            return success();
        })
    })
}

const exists = filename => fs.existsSync(filename);

const readdir = dirname => {
    return new Promise((succ, fail) => {
        fs.readdir(dirname, 'utf-8', (err, data) => {
            if(err) return fail(err);
            return succ(data);
        })
    })
}

const mkdir = (dirname, filename) => {
    return new Promise((succ, fail) => {
        fs.mkdir(path.join(dirname, filename), err => {
            if(err) return fail(err);
            return succ();
        })
    })
}

const rmdir = dirname => {
    return new Promise((succ, fail) => {
        fs.rmdir(dirname, err => {
            if(err) return fail(err);
            return succ();
        })
    })
}

const rename = (oldName, newName) => {
    return new Promise((succ, fail) => {
        fs.rename(oldName, newName, err => {
            if(err) return fail(err);
            return succ();
        })
    })
}

module.exports = {
    append,
    unlink,
    exists,
    readdir,
    mkdir,
    rmdir,
    rename
}