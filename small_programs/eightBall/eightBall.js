/*
You've learned a powerful tool in JavaScript: control flow! It's so powerful, in fact, that it can be used to tell someone's fortune.
In this project we will build the Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, then our program will output a random fortune.
*/

let userName = prompt("What is your name");
userName ? console.log(`Hello ${userName}`): console.log("Hello")

const userQuestion = prompt("What do you want to ask to Eight Ball")
console.log(`${userName} your question is ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8)

let eightBall = ""
switch (randomNumber) {
  case 0: 
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  default:
    console.log('Outlook not so good')
                
}
console.log(eightBall)
