/* Write a function to convert temperature from Celsius to Fahrenheit. */

function celsiusToFahren(tempC) {
  let result = tempC * 1.8 + 32;
  return result;
}
console.log(celsiusToFahren(30));
