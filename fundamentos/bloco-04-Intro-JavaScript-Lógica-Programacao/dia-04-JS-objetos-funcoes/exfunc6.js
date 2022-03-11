//RECEBER UM NUMERO N E DEVOLVER A SOMA DE 0 ATÉ ELE


function soma(n) {
let somatorio = 0;
    for (index = n; index > 0; index--) {
        somatorio += index;
    }
    return somatorio;
}
console.log(soma(5));
