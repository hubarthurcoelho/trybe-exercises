let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells For Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}
for (key in info) {
    if (info[key] !== info2[key]) {
        console.log(info[key] + ' e ' + info2[key]);
    }
    else { 
        console.log('Ambos recorrentes.');
    }
}
