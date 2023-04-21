function incrementString(strng) {
  return strng.replace(/([0-8]|\d?9+)?$/, e => (e ? +e + 1 : 1))
}

// function incrementString(strng) {
//   const match = strng.match(/\d*$/)
//   if (match[0]) {
//     let numStr = match[0]
//     if (numStr) {
//       let num = parseInt(numStr, 10)
//       num += 1
//       numStr = num.toString().padStart(numStr.length, '0')
//       return strng.slice(0, -numStr.length) + numStr
//     }
//   }
//   return strng + '1'
// }

console.log(incrementString('foo')) // -> foo1
console.log(incrementString('foobar23')) // -> foobar24
console.log(incrementString('foo0042')) // -> foo0043
console.log(incrementString('foo9')) // -> foo10
console.log(incrementString('foo099')) // -> foo100
