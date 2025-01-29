const convertToCelsius = function(fahr) {
  let ret = (fahr-32)*5/9;
  ret = Math.floor(ret*10+0.5);
  return ret/10;
};

const convertToFahrenheit = function(cel) {
  let ret = cel*9/5+32;
  ret = Math.floor(ret*10+0.5);
  return ret/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
