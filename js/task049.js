function uniqueInOrder(iterable) {
  // If the iterable is empty, return an empty array
  if (!iterable.length) {
    return []
  }

  // Initialize the result array with the first element of the iterable
  let result = [iterable[0]]

  // Iterate over the remaining elements of the iterable
  for (let i = 1; i < iterable.length; i++) {
    // If the current element is not the same as the previous element, add it to the result array
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i])
    }
  }

  return result
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
