const points = ekipi => {
    ekipi.map(ekipa => ekipa.poeni = ekipa.pobedi * 3 + ekipa.neresheni);
    // for(let i = 0; i < ekipi.length; i++){
    //     let poeni = ekipi[i].pobedi * 3 + ekipi[i].neresheni;
    //     ekipi[i].poeni = poeni;
    // }
}

const goalDifference = ekipi => {
    ekipi.map(ekipa => ekipa.golRazlika = ekipa.dadenoGolovi - ekipa.primanoGolovi);
    // for(let i = 0; i < ekipi.length; i++){
    //     let gd = ekipi[i].dadenoGolovi - ekipi[i].primanoGolovi;
    //     ekipi[i].golRazlika = gd;
    // }
}

const tabela = ekipi => {
    ekipi.sort((a, b) => b.poeni - a.poeni);
    for(let i = 0; i < ekipi.length; i++){
        let spaces = [];
        let k = 12;
        for(let j = ekipi[i].ekipa.length; j < k; j++){
            if(i < 9) k = 13;
            spaces.push(' ');
        }
        console.log(String(i + 1) + `. ${ekipi[i].ekipa} ${spaces.join('')} M: 16  P: ${ekipi[i].poeni}  W: ${ekipi[i].pobedi}  D: ${ekipi[i].neresheni}  L: ${ekipi[i].porazi}  GS/GC: ${ekipi[i].dadenoGolovi}:${ekipi[i].primanoGolovi}  GD: ${ekipi[i].golRazlika}`);
    }
}

module.exports = {
    points,
    goalDifference,
    tabela
}