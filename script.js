
alert("Let's make operations with 2 numbers chosen by you. Here we go...")
let number1 = prompt("Choose your first number: ")
number1 = Number(number1) // turn string into number
let number2 = prompt("Now choose your second number: ")
number2 = Number(number2) // turn string into number
let result

//same or different numbers
if(number1 == number2){
  alert("Ok, The numbers you entered are the same.")
}else {
  alert("Ok, The numbers you entered are different.")
}

//sum and even or odd number
result = (number1 + number2)
if((result % 2) == 0){
  alert(`The result of the sum, ${Number(result)}, is an even number.`)
}else{
  alert(`The result of the sum, ${Number(result)}, is an odd number.`)
}

//subtraction
result = (number1 - number2)
alert(`The result of the subtraction is: ${Number(result)}.`)

//multiplication
result = (number1 * number2)
alert(`The result of the multiplication is: ${Number(result)}.`)

//division
result = (number1 / number2)
alert(`The result of the division is: ${Number(result).toFixed(2)}.`)

//remainder of the division
result = (number1 % number2)
alert(`The remainder of the division is: ${Number(result)}.`)


