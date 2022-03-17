let inputBg = document.getElementById('background');
let inputTcolor = document.getElementById('textColor');
let body = document.getElementById('page');
let inputTextSize = document.getElementById('textSize');
let inputTextSpace = document.getElementById('textSpace');
let inputTextFamily = document.getElementById('textFamily');

inputTcolor.addEventListener('change', function(){
    localStorage.setItem('CorDeTexto', inputTcolor.value);
    body.style.color = inputTcolor.value;
});

inputBg.addEventListener('change', function(){
    localStorage.setItem('CorDeFundo', inputBg.value);
    body.style.backgroundColor = inputBg.value;
});

inputTextSize.addEventListener('change', function(){
    localStorage.setItem('TamanhoTexto', inputTextSize.value);
    body.style.fontSize = inputTextSize.value;
});

inputTextSpace.addEventListener('change', function(){
    localStorage.setItem('EspaçoTexto', inputTextSpace.value);
    body.style.letterSpacing = inputTextSpace.value;
});

inputTextFamily.addEventListener('change', function(){
    localStorage.setItem('FamíliaTexto', inputTextFamily.value);
    body.style.fontFamily = inputTextFamily.value;
});

window.onload(
body.style.backgroundColor = localStorage.getItem('CorDeFundo'), 
body.style.color = localStorage.getItem('CorDeTexto'),
body.style.fontSize = localStorage.getItem('TamanhoTexto'),
body.style.letterSpacing = localStorage.getItem('EspaçoTexto'),
body.style.fontFamily = localStorage.getItem('FamíliaTexto')
);
