function Bigram() {
  const space = ' '
  const input = document.getElementById('bigram-input').value // read the value of the input text
  const sentence = input.split(' ') // turn the string input into an array
  console.log(sentence)
  let Length = sentence.length - 2
  for (let i = 0; i < Length; i++) {//the loop to call the innerHTML function during the desired length
    result2.innerHTML +=
      sentence[i] + space + sentence[i + 1] + space + sentence[i + 2] + '<br>'
  }
}
