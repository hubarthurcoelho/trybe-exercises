const btn = document.getElementById('click-me');
const counter = document.getElementById('counter');
let count = 0;

btn.addEventListener('click', () => {
    count += 1;
    counter.innerText = count; 
})
