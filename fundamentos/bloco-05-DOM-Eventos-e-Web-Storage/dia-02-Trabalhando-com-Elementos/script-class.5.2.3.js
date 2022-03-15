//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let childNodeList = document.getElementById('pai').childNodes;
console.log(childNodeList);

for (let index = childNodeList.length - 1; index >= 0; index -= 1) {
    let childNodeAtual = childNodeList[index];
    if (childNodeAtual.id !== 'elementoOndeVoceEsta') {
        childNodeAtual.remove();
    }
}

document.getElementById('segundoEUltimoFilhoDoFilho').remove();
