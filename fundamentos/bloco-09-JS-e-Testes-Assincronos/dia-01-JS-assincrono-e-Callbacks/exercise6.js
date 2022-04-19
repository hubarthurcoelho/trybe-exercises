const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (getTemp, delay, celsiusOrF, error) => {
    const temperature = getTemp();
    const errorChance = Math.random() <= 0.6;
    if (errorChance === true) {
      if (celsiusOrF === temperatureInFahrenheit) return setTimeout(() => celsiusOrF(temperature), delay());
      if (celsiusOrF === greet) return setTimeout(() => celsiusOrF(temperature), delay());
      return setTimeout(() => console.log(`Mars temperature is: ${temperature} degrees Celsius`), delay());
    }
    error('Robot is busy');
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(getMarsTemperature, messageDelay, temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(getMarsTemperature, messageDelay, greet, handleError);
