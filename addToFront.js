// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   addToFront.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:44:49 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:44:52 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “addToFront”.
Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.

Notes: 
* It should be the SAME array, not a new array*/

function addToFront(arr, element){
     arr.unshift(element);
     return arr;
}

var output = addToFront([2, 3], 1);
console.log(output);