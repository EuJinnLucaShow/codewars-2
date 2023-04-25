function removeUrlAnchor(url) {
  for (let i = 0; i < url.length; i++) {
    if (url.charAt(i) === '#') {
      count++
    }
  }
}

console.log(removeUrlAnchor('www.codewars.com#about')) //--> "www.codewars.com"
console.log(removeUrlAnchor('www.codewars.com?page=1')) // -->"www.codewars.com?page=1"
