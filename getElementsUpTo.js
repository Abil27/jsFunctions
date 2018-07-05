// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getElementsUpTo.js                                 :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:32:17 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:32:19 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getElementsUpTo”.
Given an array and a index, “getElementsUpTo”, returns an array with all the elements 
up until, but not including, the element at the given index.
Notes:
* In order to do this you should be familiar with the ‘slice’ method*/

function getElementsUpTo(arr, index){
    return arr.splice(0, index);
}

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output);