// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getLastElement.js                                  :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:42:37 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:42:38 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array.

Notes:
* If the given array has a length of 0, it should return ‘undefined’*/

function getLastElement(array){
    return array[array.length -1];
}

var output = getLastElement([1, 2, 3, 4]);
console.log(output);