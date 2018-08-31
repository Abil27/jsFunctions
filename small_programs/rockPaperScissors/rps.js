/*
It's time to build fluency in JavaScript fundamentals. In this next Pro Project, we're going to practice conditionals in Python so you can hone your skills and feel confident taking them to the real world. Why? Given a certain input you want to return a certain output. If this than that. What's next? Games, conditionals, more JavaScript. You got this!

Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.
Our code will break the game into four parts:

Get the user's choice.
Get the computer's choice.
Compare the two choices and determine a winner.
Start the program and display the results.
*/

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Please enter a valid input')
    }
  }
  
  let userChoice = getUserChoice(prompt('choose between rock, paper or scissors'))
  
  getComputerChoice = () => {
    let choice = (Math.floor(Math.random() * 3))
    if(choice === 0){
      return 'rock'
    } else if(choice == 1){
      return 'paper'
    } else {
      return 'scissors'
    }
  }

  let computerChoice = getComputerChoice();
  
  //function to determine winner
  determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'The game was a tie'
    }
    
    //rock
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'computer won'
      } else {
        return 'User win'
      }
    }
    
    //paper
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        return 'User win'
      } else {
        return 'Computer win'
      }
  }
    
    //scissors
    if(userChoice === 'scissors'){
      if(computerChoice === 'paper'){
        return 'computer win'
      } else {
        return 'User won'
      }
    }

    //bomb
    if(userChoice === 'bomb'){
        return 'This is bomb user win anyhow'
    }
  }
  
  //function to play the game
  playGame = () => {
    console.log(`User choose ${userChoice} and Computer choose ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))
  }
  //console.log(getUserChoice('Rock'))
  //console.log(getComputerChoice())
  playGame()