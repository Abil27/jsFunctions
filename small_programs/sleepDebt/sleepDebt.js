/*
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don't sleep enough, we accumulate sleep debt. In this project we'll calculate if you're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// const getSleepHours = (day) => {
//     switch(day){
//       case 'monday':
//         return 8;
//       case 'tuesday':
//         return 7;
//       case 'wednesday':
//         return 5;
//       case 'thursday':
//         return 6;
//       case 'friday':
//         return 4;
//       case 'saturday':
//         return 5;
//       default:
//         return 10;
//     }
//   }
const mondaySleep = prompt('How many hours did you sleep on Monday');
const tuesdaySleep = prompt('How many hours did you sleep on Tuesday');
const wednesdaySleep = prompt('How many hours did you sleep on Wednesday');
const thursdaySleep = prompt('How many hours did you sleep on Thursday');
const fridaySleep = prompt('How many hours did you sleep on Friday');
const saturdaySleep = prompt('How many hours did you sleep on Saturday');
const sundaySleep = prompt('How many hours did you sleep on Sunday');
  
  const getActualSleepHours = () => {
    ///return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
    return parseInt(mondaySleep) + parseInt(tuesdaySleep) + parseInt(wednesdaySleep) + parseInt(thursdaySleep) + parseInt(fridaySleep) + parseInt(saturdaySleep) + parseInt(sundaySleep)
  }
  
  const getIdealSleepHours = () => {
    return idealHours = 42
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours()
    idealSleepHours = getIdealSleepHours()
    
    if(actualSleepHours === idealSleepHours){
      console.log(`Your actual sleepHours is ${actualSleepHours} and your Ideal sleepHours is ${idealSleepHours}, its perfect you don't have any debt`)
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You sleep for ${actualSleepHours} when all you need is ${idealSleepHours}, Lazy dude`)
    } else {
      console.log(`You need ${idealSleepHours} of sleep and you only slept for ${actualSleepHours}. You need to sleep ${idealSleepHours - actualSleepHours} hours more`)
    }
  }
  
  calculateSleepDebt()