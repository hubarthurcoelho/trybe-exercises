let notaDesafio = 101;
if (notaDesafio >= 80 && notaDesafio <= 100){
    console.log("Parabéns! Você foi aprovado.");
}
else if (notaDesafio >= 60 && notaDesafio < 80) {
    console.log("Você está na lista de espera.");
}
else if (notaDesafio <60) {
    console.log("Você foi reprovado.");
}
else {
    console.log("Insira uma nota válida (1 a 100)");
}
