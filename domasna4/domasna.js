// const fs = require('fs');
// const path = require('path');

const { append, unlink, exists, readdir, mkdir, rmdir, rename } = require('./modules.js');

const appendToFile = async() => {
    try{
        await append('./text.txt', 'Nekoj si tekst');
    } catch(err) {
        console.log(err);
    }
}

appendToFile();

const unlinkFile = async() => {
    try{
        await unlink('./text.txt');
    } catch(err) {
        console.log(err);
    }
}

unlinkFile();

const doesFileExist = () => {
    if(exists('./text.txt')) return 'Exists';
    return 'Does not exist';
}

console.log(doesFileExist());

const readDirectory = async() => {
    try{
        const primer = await readdir('../domasna4');
        console.log(primer);
    } catch(err) {
        console.log(err);
    }
}

readDirectory();

const createDirectory = async() => {
    try{
        await mkdir('./folder', 'test');
    } catch(err) {
        console.log(err);
    }
}

createDirectory();

const removeDirectory = async() => {
    try{
        await rmdir('./folder');
    } catch(err) {
        console.log(err);
    }
}

removeDirectory();

const renameFile = async() => {
    try{
        await rename('text.txt', 'drugoIme.txt');
    } catch(err) {
        console.log(err);
    }
}

renameFile();