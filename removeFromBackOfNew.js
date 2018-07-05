// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   removeFromBackOfNew.js                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:48:11 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:48:13 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “removeFromBackOfNew”.

Given an array, “removeFromBackOfNew” returns a new array containing all but 
the last element of the given array.

Notes:
* You should be familiar with the ‘slice’ method.*/

function removeFromBackOfNew(arr){
    return arr.slice(0, arr.length - 1);
}

var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); 
console.log(arr);