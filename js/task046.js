const min = function (list) {
  return Math.min(...list)
}

const max = function (list) {
  return Math.max(...list)
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])) // -110
console.log(min([42, 54, 65, 87, 0])) // 0
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])) // 566
console.log(max([5])) // 5
