// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isOldEnoughToDrive.js                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 11:36:59 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 11:37:01 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isOldEnoughToDrive”.
* Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
* Notes:
* The legal driving age in the United States is 16.
*/

function isOldEnoughToDrive(age) {
    return age > 15 ? true: false;
 }
 
 isOldEnoughToDrive(25);

