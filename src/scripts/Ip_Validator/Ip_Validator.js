function IP_Validator() {
    let arrayInt = []
  const input = document.getElementById('ipvalidator').value
  console.log(input)
  var regexp = /[.]/gi
  var array = input.match(regexp)
  var size = array?.length || 0
  console.log(size) //size = 3 ok size >3
  var result1 = document.getElementById('result1')
  if (size != 3) {
    result1.innerHTML = 'the IP address is not valid'
  } else {
    const array = input.split('.')
    console.log(array)
    if (array.length != 4) {
      result1.innerHTML = 'the IP address is not valid'
    } else {
        const arrayInt = array.map(x => parseInt(x))
        const sup = arrayInt.filter(x => x > 256)
        console.log(sup.length)
      array.forEach((element) => {
        if (element === '' || sup.length > 0) {
            result1.innerHTML = 'the IP address is not valid'
        } else {
            result1.innerHTML = 'the IP address is valid'
         }
      })
    }
  }
}
