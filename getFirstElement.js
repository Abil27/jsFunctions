// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getFirstElement.js                                 :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:38:41 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:38:43 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getFirstElement”.
Given an array, “getFirstElement” returns the first element of the given array.

Notes:
* If the given array has a length of 0, it should return undefined.*/

function getFirstElement(array){
    return array[0];
}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output);