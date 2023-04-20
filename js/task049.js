/*Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]*/

// function comp(a, b) {
//   if (!a || !b) {
//     return false
//   }

//   const sortedA = a.sort((x, y) => x - y)
//   const sortedB = b.sort((x, y) => x - y)

//   for (let i = 0; i < sortedA.length; i++) {
//     if (sortedA[i] * sortedA[i] !== sortedB[i]) {
//       return false
//     }
//   }

//   return true
// }

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  return array1.map(v => v * v).every((v, i) => v == array2[i])
}

const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

console.log(comp(a, b))
