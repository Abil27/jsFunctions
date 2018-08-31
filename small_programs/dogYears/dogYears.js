/* 
Dog Years
Time moves quickly for dogs. 8 years in a human's life is like 45 years in a dog's life! How old would you be if you were a dog?

Here's how you convert your age to dog years:

The first two human years of a dog's life count as 10.5 dog years each.
Each human year following counts as 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your age into dog years.
*/

const myAge = 29
let earlyYears = 2
earlyYears *= 10.5
laterYears = myAge - 2
laterYears *= 4
myAgeInDogYears = earlyYears + laterYears
myName = "Houssein".toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years`)