// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   nextInLine.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 10:36:48 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 10:36:57 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/* Write a function nextInLine which takes an array (arr) and a number (item) as 
* arguments.Add the number to the end of the array, then remove the first 
* element of the array.
*The nextInLine function should then return the element that was removed*/

function nextInLine(array, item)
{
    array.push(item);
    return array.shift();
}

const testArray = ['To be removed','Houssein', 'Takef', 'Abil', 9];
console.log(nextInLine(testArray, 'Faizah'));
console.log(testArray);
