// function incrementString(strng) {
//   let letter = strng.slice(strng.length - 1, strng.length)
//   if (Number(letter) === NaN) {
//     return strng + 1
//   } else {
//     letter = Number(letter) + 1
//   }
//   return String(letter)
// }

function incrementString(strng) {
  const match = strng.match(/\d*$/)
  if (match[0]) {
    let numStr = match[0]
    if (numStr) {
      let num = parseInt(numStr, 10)
      num += 1
      numStr = num.toString().padStart(numStr.length, '0')
      return strng.slice(0, -numStr.length) + numStr
    }
  }
  return strng + '1'
}

console.log(incrementString('foo')) // -> foo1
console.log(incrementString('foobar23')) // -> foobar24
console.log(incrementString('foo0042')) // -> foo0043
console.log(incrementString('foo9')) // -> foo10
console.log(incrementString('foo099')) // -> foo100
