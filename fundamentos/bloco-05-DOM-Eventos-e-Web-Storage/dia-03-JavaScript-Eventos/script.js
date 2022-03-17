function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.


  // Questão 1: Adicionar dias do mês de forma dinâmica na tag <ul>. Dias 24, 25, 31 devem ter classe: holiday, além de day.

    // Passo 1: Criar as <li> e dar a <ul> como pai.
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let currentDay = document.createElement('li');
        currentDay.className = 'day';
        currentDay.innerText = dezDaysList[index];
        if (dezDaysList[index] == 24 || dezDaysList[index] == 25 || dezDaysList[index] == 31) {
        currentDay.className = 'day holiday';
        }
        document.getElementById('days').appendChild(currentDay);
    }

  // Questão 2: Implemente uma função que receba uma string 'Feriados' e crie um botão com o nome 'Feriados'.

    // Passo 1: Criar a função e nela criar o botão. Depois executar a função.
    function holidays(feriados) {
    var btn = document.createElement('button');
    btn.id = 'btn-holiday';
    btn.innerText = feriados;
    document.querySelector('.buttons-container').appendChild(btn);
    }
    holidays('Feriados');

  // Questão 3: Adicionar um event listener que mude a cor dos dias que são feriados.

    // Passo 1: Recuperar o elemento button e adicionar event listener
    function highlightHolidays (){
      let holidayButton = document.getElementById('btn-holiday');
      let holidays = document.querySelectorAll('.holiday');
      holidayButton.addEventListener('click', changeColor);
      function changeColor(){
        for (let index = 0; index < holidays.length; index += 1) {
          console.log(holidays[index]);
          if (holidays[index].style.backgroundColor === 'white'){
          holidays[index].style.backgroundColor = 'green';
          } else {
          holidays[index].style.backgroundColor = 'white';
          }
        }
      }
    }
    highlightHolidays();




 // Questão 4:
 function sextas(sextou) {
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.innerText = sextou;
  document.querySelector('.buttons-container').appendChild(btn);
  }
  sextas('Sexta-feira');

  // Questão 5:
  let todosOsDias = document.querySelectorAll('.day');
  let sextaFeiras = ['4', '11', '18', '25'];
  for (let index = 0; index < todosOsDias.length; index += 1) {
    if (todosOsDias[index].innerText == '4' || todosOsDias[index].innerText == '11' || todosOsDias[index].innerText == '18') {
      todosOsDias[index].classList = 'day friday';
    } else if (todosOsDias[index].innerText == '25')
      todosOsDias[index].classList = 'day friday holiday';
  }

  let botaoSextou = document.getElementById('btn-friday');
  botaoSextou.addEventListener('click', sextou);
  function sextou () {
    let sextasFeiras = document.querySelectorAll('.friday');
    for (let index = 0; index < sextasFeiras.length; index += 1){ 
      if (sextasFeiras[index].innerText !== 'Sexta-feira'){
        sextasFeiras[index].innerText = 'Sexta-feira';
      } else {
        sextasFeiras[index].innerText = sextaFeiras[index];
      }
    }
  }

// Questão 6:

function mouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function mouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event){
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

mouseOver();
mouseOut();


// Questão 7: 
function createTask (task){
  let task1 = document.createElement('span');
  let divTask = document.querySelector('.my-tasks');
  task1.innerText = task;
  divTask.appendChild(task1);
}
createTask('Cozinhar');

// Questão 8: 
function legendaColorida(cor){
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(div);
}
legendaColorida('green');

// Questão 9:
function changeCurrentTask () {
  let currentTask = document.querySelector('.task');
  currentTask.addEventListener('click', function(event){
    console.log(event.target.className);
    if (event.target.className == 'task'){
    event.target.className = 'task-selected';
    }else{
    event.target.className = 'task';
    }
  });
}
changeCurrentTask();

// Questão 10: 
function setTaskDays () {
  let days = document.querySelector('#days');
  days.addEventListener('click', function(event) {
    let taskSelected = document.querySelector('.task-selected');
    if (event.target.style.color !== taskSelected.style.backgroundColor){
    event.target.style.color = taskSelected.style.backgroundColor;
    } else {
    event.target.style.color = 'rgb(119, 119, 119)';
    }
  });
}
setTaskDays();










