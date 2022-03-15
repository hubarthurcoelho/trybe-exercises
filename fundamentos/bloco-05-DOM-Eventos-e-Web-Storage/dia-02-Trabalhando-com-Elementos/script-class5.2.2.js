// Questão 1 - criar um irmão para elementoOndeVoceEsta
let questao1 = document.getElementById('pai').appendChild(document.createElement('section'));
console.log(questao1);

// Questão 2 - Criar um filho para elementoOndeVoceEsta
let questao2 = document.getElementById('elementoOndeVoceEsta').appendChild(document.createElement('section'));
console.log(questao2);

// Questão 3 - Criar um filho para primeiroFilhoDoFilho
let questao3 = document.getElementById('elementoOndeVoceEsta').firstElementChild.appendChild(document.createElement('p'));
console.log(questao3);

// Questão 4 - A partir desse filho criado acesse terceiroFilho
let questao4 = document.querySelector('p').parentElement.parentElement.nextElementSibling;
console.log(questao4);
