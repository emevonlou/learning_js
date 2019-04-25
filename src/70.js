// Convert Celsius to Fahrenheit - FreeCodeCamp

function convertToF(celsius) {
    return (celsius * (9 / 5)) + 32;
}

function convertToC(fahrenheit) {
  return ((farenheit -32)/ 5 / 9);
}

// const convertToF = (celsius) => (celsius * (9 / 5)) + 32;


  console.log(convertToF(30));
  console.log(convertToF(-30));
  console.log(convertToF(20));
  console.log(convertToF(-10));
  console.log(convertToF(30));
  console.log(convertToF(0));