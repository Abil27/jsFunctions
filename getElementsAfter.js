// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getElementsAfter.js                                :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:29:24 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:29:26 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getElementsAfter”.
Given an array and an index, “getElementsAfter” returns a new array with all the elements 
after (but not including) the given index*/

function getElementsAfter(arr, index){
    return arr.slice(index + 1);
}

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output);