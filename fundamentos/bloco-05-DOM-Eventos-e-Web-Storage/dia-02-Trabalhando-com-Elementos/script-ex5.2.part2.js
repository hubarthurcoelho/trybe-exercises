// Questão 1: Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

    // Criando uma let body para representar o <body>:
    let  body = document.getElementById('paiDeTodos');

    // Criando um novo elemento com a tag 'h1' como pedido no exercício e adicionando um ID para recuperá-lo depois:
    let h1Body = document.createElement('h1');
    h1Body.id = 'h1Body';


    // Dando um pai para esse novo elemento, o Body:
    body.appendChild(h1Body);
    
    // Recuperando esse novo elemento e modificando seu innerText:
    document.getElementById('h1Body').innerText = 'Exercício 5.2 - JavaScript DOM';

// Questão 2: Adicione a tag main com a classe main-content como filho da tag body;

    // Criando um novo elemento com a tag 'main' e com a classe 'main-content' como pedido no exercício:
    let mainBody = document.createElement('main');
    mainBody.className = 'main-content';

    // Dando um pai para esse novo elemento, o Body:
    body.appendChild(mainBody);

// Questão 3: Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

    // Criando um novo elemento e adicionando a sua classe:
    let centerContent = document.createElement('section');
    centerContent.className = 'center-content';

    // Dando um pai para esse elemento, o Main:

    mainBody.appendChild(centerContent);

// Questão 4: Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

    // Criando um novo elemento e adicionando texto: 
    let sectionP = document.createElement('p');
    sectionP.innerText = 'Aqui vamos falar sobre JavaScript e DOM.'

    // Dando um pai, no caso a section anterior:
    centerContent.appendChild(sectionP);

// Questão 5: Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

    // Criando um novo elemento Section:
    let section2Son = document.createElement('section');
    section2Son.className = 'left-content';

    // Dando um pai para esse elemento:
    mainBody.appendChild(section2Son);

// Questão 6: Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

    // Criando um novo elemento Section:
    let section3Son = document.createElement('section');
    section3Son.className = 'right-content';

    // Dando um pai para esse novo elemento:
    mainBody.appendChild(section3Son);

// Questão 7: Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e 
// classe small-image . Esse elemento deve ser filho do section criado no passo 5;

    // Criando um novo elemento img:
    let image = document.createElement('img');
    image.src = 'https://picsum.photos/200';
    image.className = 'small-image';

    // Dando um pai para esse novo elemento:
    section2Son.appendChild(image);

// Questão 8: Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , 
// dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

    // Criando um elemento de lista não ordenada:
    let unorderedList = document.createElement('ul');

    // Dando um pai para esse elemento:
    section3Son.appendChild(unorderedList);

    // Criando os itens da lista e atribuindo seus valores através de uma estrutura de repetição:
    let array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
    for (let index = 0; index < array.length; index += 1) {
        let itemList = document.createElement('li');
        itemList.innerText = array[index];
        unorderedList.appendChild(itemList);
    }

// Questão 9: Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

    // Criando uma estrutura de repetição para criar as 3 tags:
    for (let index = 0; index < 3; index += 1) {
        let mainH3 = document.createElement('h3');
        mainBody.appendChild(mainH3);
        // mainH3.className = 'description';
    }
    
// ---------------------------------------- SEGUNDA PARTE---------------------------------------- 

// Questão 1: Adicione a classe title na tag h1 criada;
    h1Body.className = 'title';

// Questão 2: Adicione a classe description nas 3 tags h3 criadas;

    // Poderia simplemente adicionar no For da questão 9 como comentado, porém farei novamente:
    let h3List = document.querySelectorAll('main h3');
    for (let index = 0; index < h3List.length; index += 1) {
        h3List[index].className = 'description';
    }

// Questão 3: Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();

    mainBody.removeChild(section2Son);

// Questão 4: Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta 
// configurar o margin-right: auto da section ;

    section3Son.style.marginRight = 'auto';

// Questão 5: Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;

    mainBody.style.backgroundColor = 'green';

// Questão 6: Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

    unorderedList.removeChild(unorderedList.lastElementChild);
    unorderedList.removeChild(unorderedList.lastElementChild);
    