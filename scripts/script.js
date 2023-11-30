const binaryInput = document.getElementById("binaryInput")
const resultInput = document.getElementById("resultInput")

// binaryInput.addEventListener("keydown", e => {
//   const character = e.key 
//   if (character !== "1" && character !== "0" ) {
//     e.preventDefault()
//   }
// })

binaryInput.addEventListener("keydown", e => {
  const code = e.code
  const invalidKeyCodes = ["Period", "KeyE", "Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9",]
  if (invalidKeyCodes.includes(code)) return e.preventDefault()
})

binaryInput.addEventListener("input", e => {
  const binaryNumber = e.target.value
  if (binaryNumber === "") return resultInput.value = ""
  const binaryNumberArray = binaryNumber.split("")
  const decimalNumber = binToDec(binaryNumberArray)
  resultInput.value = decimalNumber
})

function binToDec(stringArray) {
  const numberArray = stringArray.map(number => parseInt(number)).reverse()
  return numberArray.reduce((sum, n, index) => {
    if (n === 1 && index === 0) return 1 + sum
    if (n === 1 && index > 0) return 2**index + sum
    if (n === 0 ) return sum
  })
}