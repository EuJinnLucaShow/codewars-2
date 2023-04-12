/*You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3*/

function stray(numbers) {
  let uniqueNumber = 0
  for (const number of numbers) {
    uniqueNumber ^= number
  }
  return uniqueNumber
}

console.log(stray([1, 1, 2])) // 2
console.log(stray([1, 2, 1])) // 2

/*Ця функція використовує оператор XOR (`^`), щоб знайти унікальне число в масиві. Операція XOR між двома числами повертає 1, якщо відповідні біти різні, і 0, якщо вони однакові. Тому операція XOR усіх чисел у масиві призведе до отримання унікального числа.*/
