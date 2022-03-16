let questao1 = document.getElementById('pai').firstElementChild.nextElementSibling;
console.log(questao1);

let questao2 = document.getElementById('elementoOndeVoceEsta').parentElement;
console.log(questao2);
questao2.style.backgroundColor = 'blue';

let questao3 = document.getElementById('elementoOndeVoceEsta').firstElementChild;
console.log(questao3);
questao3.innerHTML = 'Tico e Teco';

let questao4 = document.getElementById('pai').firstElementChild;
console.log(questao4);

let questao5 = document.getElementById('elementoOndeVoceEsta').firstElementChild;
console.log(questao5);

let questao6 = document.getElementById('elementoOndeVoceEsta').nextSibling;
console.log(questao6);

let questao7 = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
console.log(questao7);

let questao8 = document.getElementById('pai').lastElementChild.previousElementSibling;
console.log(questao8);
