function getResult() {
  const input = document.getElementById('search').value.toLowerCase() // read the value of the input text
  console.log(input)
  var regexp = /[z]/gi //the regex to select a z
  var array = input.match(regexp) //fill a array with the matched value
  var size = array?.length || 0 //give the size of the array if exist and 0 overwize
  console.log(array)
  console.log(size)
  if (size > 0) { //Checking the validity of the search
    result.innerHTML = 'il y a ' + size + ' z'
  } else {
    result.innerHTML = "aucun z à l'horizon"
  }
}
