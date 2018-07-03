// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isOldEnoughToDrink.js                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 11:33:36 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 11:33:41 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/* Write a function called “isOldEnoughToDrink”.
 * Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
 * Notes:
 * The legal drinking age in the United States is 21.
 */

function isOldEnoughToDrink(age){
    return age > 20 ? true: false;
};
isOldEnoughToDrink(12);
