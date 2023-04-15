/*The weather forecast app displays a string with forecasted humidities from a given array. 
Example
[49, 51, 63] will display " ... 49% humidity in 1 days ... 51% humidity in 2 days ... 63% humidity in 3 days ..."
1.	Create  a function printHumiditiesForecast(), which takes an array as a parameter and logs a string like the above to the console. Try it with both test datasets.
2.	Use the problem-solving framework: understand the problem and divide it into sub-problems!
Data1: [49, 51, 63]
Data2: [31, 29, 43, 58, 52]
*/

function printHumiditiesForecast(array) {
  let str = '... '
  for (let i = 0; i < array.length; i += 1) {
    str = str + `${array[i]}% humidity in ${i + 1} days ...`
  }
  return str
}

console.log(printHumiditiesForecast([49, 51, 63]))
console.log(printHumiditiesForecast([31, 29, 43, 58, 52]))
