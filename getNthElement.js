// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getNthElement.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:32:39 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:32:42 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given 
integer, within the given array.

Notes:
* If the array has a length of 0, it should return ‘undefined’.*/

function getNthElement(arr, n){
    return arr[n];
}

var output = getNthElement([1, 3, 5], 3);
console.log(output);
