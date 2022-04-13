const greet = (name = 'stranger', greeting = 'Hi') => {
  return `${greeting} ${name}!`;
}

console.log(greet('John')) // returns 'Hi John'
console.log(greet('John', 'Good morning')) // returns 'Good morning John'
console.log(greet('Isabela', 'Oi')) // returns 'Oi Isabela'
console.log(greet()); // returns 'Hi stranger!'
