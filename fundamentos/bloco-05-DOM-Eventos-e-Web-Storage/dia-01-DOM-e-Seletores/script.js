const header = document.getElementById('header-container');
header.style.color = 'white';
header.style.backgroundColor = "green";

let emergencyTaskListTitle = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emergencyTaskListTitle.length; i += 1) {
    emergencyTaskListTitle[i].style.color = 'white';
    emergencyTaskListTitle[i].style.backgroundColor = 'purple';
}

let noEmergencyTaskTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (i = 0; i < noEmergencyTaskTitle.length; i += 1) {
    noEmergencyTaskTitle[i].style.color = 'white';
    noEmergencyTaskTitle[i].style.backgroundColor = 'black';
}

document.querySelector('.emergency-tasks').style.backgroundColor = 'orange';
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow';
document.querySelector('#footer-container').style.backgroundColor = 'blue';