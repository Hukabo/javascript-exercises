const convertToCelsius = function(fahrenheit) {
  fahrenheit = (fahrenheit - 32) * 5 / 9;
  const result = Math.round(fahrenheit * 10) / 10;

  return result;
};

const convertToFahrenheit = function(celsius) {
  celsius = (celsius * (9 / 5) + 32);
  const result = Math.round(celsius * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
