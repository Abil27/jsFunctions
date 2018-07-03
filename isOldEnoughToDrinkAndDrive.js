// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isOldEnoughToDrinkAndDrive.js                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 11:42:39 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 11:42:42 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isOldEnoughToDrinkAndDrive”.
Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether 
a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.*/

function isOldEnoughToDrinkAndDrive(age){
    return age > 20 ? true: false;
}

console.log(isOldEnoughToDrinkAndDrive(25));

