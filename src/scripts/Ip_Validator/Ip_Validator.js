function IP_Validator() {
    let arrayInt = []
  const input = document.getElementById('ipvalidator').value // read the value of the input text
  console.log(input)
  var regexp = /[.]/gi // the regex
  var array = input.match(regexp) // filling array of matching value
  var size = array?.length || 0  // filling array of matching value
  console.log(size) //size = 3 ok size >3
  if (size != 3) { // 1st check
    result1.innerHTML = 'the IP address is not valid'
  } else {
    const array = input.split('.') //creating an array
    console.log(array)
    if (array.length != 4) { //2nd check
      result1.innerHTML = 'the IP address is not valid'
    } else {
        const arrayInt = array.map(x => parseInt(x)) //transforming the value into integer
        const sup = arrayInt.filter(x => x > 256) //filtering the array with a max size
        console.log(sup.length)
      array.forEach((element) => {
        if (element === '' || sup.length > 0) { //3rd check
            result1.innerHTML = 'the IP address is not valid'
        } else {
            result1.innerHTML = 'the IP address is valid'
         }
      })
    }
  }
}
