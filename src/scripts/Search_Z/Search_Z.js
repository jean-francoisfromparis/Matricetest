function getResult() {
  const input = document.getElementById('search').value.toLowerCase()
  console.log(input)
  var regexp = /[z]/gi
  var array = input.match(regexp)
  var size = array?.length || 0
  console.log(array)
  console.log(size)
  var result = document.getElementById('result')
  if (size > 0) {
    result.innerHTML = 'il y a ' + size + ' z'
  } else {
    result.innerHTML = " aucun z à l'horizon"
  }
}
