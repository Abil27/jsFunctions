// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   addToBack.js                                       :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:49:51 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:49:53 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “addToBack”.
Given an array and an element, “addToBack” returns the given array with the given 
element added to the end.

Note: It should be the SAME array, not a new array*/

function addToBack(arr, element){
    arr.push(element);
    return arr;
}

var output = addToBack([1, 2], 3);
console.log(output);