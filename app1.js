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

function randomNumber(){

    let randNum = Math.floor(Math.random() * 100) + 1;
    return randNum
}

function guessingGame(){
    correctAnswer = randomNumber();
    console.log(correctAnswer);
    let guesses = 10;
    for(let i = 0; i < guesses; i++){
        let guessLeft = guesses - i
        let userGuess = parseInt(prompt('Enter a Number 1-100. You have ' + guessLeft + ' guesses left!'));

        while(userGuess < 1 || userGuess > 100){
            userGuess = parseInt(prompt('WRONG!Try Again 1-100'));
        }
        if(userGuess == correctAnswer){
            alert('You Actually Did It!');
            break;
        } else if(userGuess > correctAnswer){
            alert('You are to high!');
        } else if(userGuess < correctAnswer){
            alert('You are to low!');
        }
        else{
            alert('Follow Directions!');
        }
    }
}
guessingGame();

function picturesOnPage(){
    let numberOfPictures = prompt('How much VSM do you want?')
    for(let i = 0; i < numberOfPictures; i++){
        document.write('<img src="https://pbs.twimg.com/profile_images/1443937530043273224/aZWclSE3_400x400.jpg">')
    }
}