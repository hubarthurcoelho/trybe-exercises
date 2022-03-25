const submitBtn = document.getElementById('submitBtn');
const cleaner = document.getElementById('cleaner');
const inputs = document.getElementsByTagName('input');
const photoUsage = document.getElementById('accept-photo-usage');

// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault();
// });

cleaner.addEventListener('click', function() {
    for (let index = 0; index < inputs.length; index += 1) {
        inputs[index].value = '';
    };
});

submitBtn.addEventListener('click', function(event) {
    if (photoUsage.checked !== true) {
        event.preventDefault();
    }
});

function checkLength() {
    let cont = 0;
    for (let index = 0; index < inputs.length; index += 1) {
        if (inputs[index].length > inputs[index].maxLength) {
            cont += 1;
        };
    }
    if (cont >= 1) {
        window.alert('Dados Inválidos!');
    }
    window.alert('Dados enviados com sucesso!');
}