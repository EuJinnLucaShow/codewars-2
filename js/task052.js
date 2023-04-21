/*Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square*/

// function findNextSquare(sq) {
//   const num = Math.sqrt(sq)
//   if (num % 1 !== 0) {
//     return -1
//   }
//   return Math.pow(num + 1, 2)
// }

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2)
}

console.log(findNextSquare(121))
