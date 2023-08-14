function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value.trim();
    var unitInput = document.querySelector('input[name="unit"]:checked');

    if (temperatureInput === "" || isNaN(temperatureInput)) {
      alert("Please enter a valid temperature!");
      return;
    }

    var temperature = parseFloat(temperatureInput);
    var unitOutput = document.querySelector('input[name="unit"]:not(:checked)').value;

    var convertedTemperature;
    if (unitInput.value === "celsius") {
      convertedTemperature = celsiusTo(unitOutput, temperature);
    } else if (unitInput.value === "fahrenheit") {
      convertedTemperature = fahrenheitTo(unitOutput, temperature);
    } else {
      convertedTemperature = kelvinTo(unitOutput, temperature);
    }

    document.getElementById("result").innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${unitOutput}`;
  }

  function celsiusTo(targetUnit, value) {
    switch (targetUnit) {
      case "celsius":
        return value;
      case "fahrenheit":
        return (value * 9/5) + 32;
      case "kelvin":
        return value + 273.15;
      default:
        return NaN;
    }
  }

  function fahrenheitTo(targetUnit, value) {
    switch (targetUnit) {
      case "celsius":
        return (value - 32) * 5/9;
      case "fahrenheit":
        return value;
      case "kelvin":
        return (value + 459.67) * 5/9;
      default:
        return NaN;
    }
  }

  function kelvinTo(targetUnit, value) {
    switch (targetUnit) {
      case "celsius":
        return value - 273.15;
      case "fahrenheit":
        return (value * 9/5) - 459.67;
      case "kelvin":
        return value;
      default:
        return NaN;
    }
  }