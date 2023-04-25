function likes(names) {
  if (names.length === 0) {
    return 'no one likes this'
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} likes this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} likes this`
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

console.log(likes([])) //-->  "no one likes this"
console.log(likes(['Peter'])) //-->  "Peter likes this"
console.log(likes(['Jacob', 'Alex'])) //-->  "Jacob and Alex like this"
console.log(likes(['Max', 'John', 'Mark'])) //-->  "Max, John and Mark like this"
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) //-->  "Alex, Jacob and 2 others like this"
