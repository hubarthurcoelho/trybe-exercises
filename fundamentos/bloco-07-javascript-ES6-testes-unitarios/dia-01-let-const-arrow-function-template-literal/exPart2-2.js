const biggestWord = (string) => {
  const stringArray = string.split(' ');
  let mark = stringArray[0];
    for (let index = 0; index < stringArray.length; index += 1){
        if (stringArray[index].length > mark.length){
            mark = stringArray[index];
        }
    }
  return mark;
}

console.log(biggestWord('Antonio foi no banheiro e nao sabemos o que aconteceu'));
