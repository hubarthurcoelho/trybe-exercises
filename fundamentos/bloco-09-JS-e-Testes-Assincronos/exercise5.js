const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (getTemp, delay, celsiusOrF) => {
    const temperature = getTemp();
    if (celsiusOrF === temperatureInFahrenheit) return setTimeout(() => celsiusOrF(temperature), delay());
    if (celsiusOrF === greet) return setTimeout(() => celsiusOrF(temperature), delay());
    return setTimeout(() => console.log(`Mars temperature is: ${temperature} degrees Celsius`), delay());
}

sendMarsTemperature(getMarsTemperature, messageDelay, temperatureInFahrenheit); // "It is currently randomºF at Mars"
sendMarsTemperature(getMarsTemperature, messageDelay, greet); // "Hi there! Curiosity here. Right now is randomºC at Mars"
sendMarsTemperature(getMarsTemperature, messageDelay); // "Mars temperature is: 42 degrees Celsius"
