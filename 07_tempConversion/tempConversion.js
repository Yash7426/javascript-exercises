const convertToCelsius = function(t) {
  let c=0;
  c=(+t-32)*(5/9);
  return Number(c.toFixed(1));
};

const convertToFahrenheit = function(t) {
  let c=0;
  c=(+t*(9/5)+32);
  return Number(c.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
