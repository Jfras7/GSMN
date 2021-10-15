console.log('GSMN')

let userName = prompt('What is your Name?')
    console.log(userName)

let userAge = prompt('How old are you?')
    console.log(userAge)

document.write('<h2>Welcome ' + userName + '</h2>')

function adder(num1, num2){
   console.log(num1 + num2);
}

adder(2, 7);

let userAnswer = prompt('Do you want to join the Champions Club?')

if (userAnswer.toLowerCase() == 'yes'){
    document.write('APPLY')
}