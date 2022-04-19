const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = (getTemp, delay) => {
    const temperature = getTemp();
    setTimeout(() => console.log(`Mars temperature is: ${temperature} degrees Celsius`), delay());
}

sendMarsTemperature(getMarsTemperature, messageDelay); // Mars temperature is: 22 degrees Celsius
