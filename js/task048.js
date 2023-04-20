/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

// function uniqueInOrder(iterable) {
//   // If the iterable is empty, return an empty array
//   if (!iterable.length) {
//     return []
//   }

//   // Initialize the result array with the first element of the iterable
//   let result = [iterable[0]]

//   // Iterate over the remaining elements of the iterable
//   for (let i = 1; i < iterable.length; i++) {
//     // If the current element is not the same as the previous element, add it to the result array
//     if (iterable[i] !== iterable[i - 1]) {
//       result.push(iterable[i])
//     }
//   }

//   return result
// }

function uniqueInOrder(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD')) // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])) // [1, 2, 3]
