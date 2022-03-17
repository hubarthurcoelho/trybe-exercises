let inputBg = document.getElementById('background');
let inputTcolor = document.getElementById('textColor');
let body = document.getElementById('page');

inputTcolor.addEventListener('change', function(){
    localStorage.setItem('CorDeTexto', inputTcolor.value);
    body.style.color = inputTcolor.value;
})

inputBg.addEventListener('change', function(){
    localStorage.setItem('CorDeFundo', inputBg.value);
    body.style.backgroundColor = inputBg.value;
})
 
window.onload(body.style.backgroundColor = localStorage.getItem('CorDeFundo'), body.style.color = localStorage.getItem('CorDeTexto'));
