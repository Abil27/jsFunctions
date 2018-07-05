// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   removeFromFrontOfNew.js                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:51:02 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:51:06 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “removeFromFrontOfNew”.

Given an array, “removeFromFrontOfNew” returns a new array containing all but the 
first element of the given array.

Notes:
* You should be familiar with the ‘slice’ method*/

function removeFromFrontOfNew(arr){
    return arr.slice(arr[0]);
}

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); 
console.log(arr);