const skills = ['violão', 'LoL', 'JavaScript', 'HTML', 'CSS'];

const replaceX = (string, replace) => {
  const stringArray = string.split(' ');
    for (let index = 0; index < stringArray.length; index += 1) {
        if (stringArray[index] === 'x') {
            stringArray[index] = replace;
        }
    }
  return `${stringArray.join(' ')}`;
}

console.log(replaceX('tryber x aqui!', 'Arthur'));

const concat = () => `${replaceX('tryber x aqui!', 'Arthur')} Minhas cinco principais
caracteristicas são ${skills.sort()}`;

console.log(concat());
