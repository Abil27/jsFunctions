// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isPersonOldEnoughToDrinkAndDrive.js                :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 16:22:31 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 16:22:34 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isPersonOldEnoughToDrinkAndDrive”.
Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToDrinkAndDrive” returns whether the given person is old 
enough to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.*/
function isPersonOldEnoughToDrinkAndDrive(person){
    return false;
}

var obj = {
    age: 25
  };
  var output = isPersonOldEnoughToDrinkAndDrive(obj);
  console.log(output)