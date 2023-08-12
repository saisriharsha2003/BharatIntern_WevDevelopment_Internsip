function convertTemperature() {
    var fromTemp = parseFloat(document.getElementById("fromTemp").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  
    var resultElement = document.getElementById("toResult");
    var convertedTemp;
  
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedTemp = (fromTemp * 9/5) + 32;
      } else if (toUnit === "kelvin") {
        convertedTemp = fromTemp + 273.15;
      } else {
        convertedTemp = fromTemp;
      }
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedTemp = (fromTemp - 32) * 5/9;
      } else if (toUnit === "kelvin") {
        convertedTemp = (fromTemp + 459.67) * 5/9;
      } else {
        convertedTemp = fromTemp;
      }
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedTemp = fromTemp - 273.15;
      } else if (toUnit === "fahrenheit") {
        convertedTemp = (fromTemp * 9/5) - 459.67;
      } else {
        convertedTemp = fromTemp;
      }
    }
  
    resultElement.innerHTML = `${fromTemp.toFixed(2)} ${fromUnit} is equal to ${convertedTemp.toFixed(2)} ${toUnit}.`;
  }
  