// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   removeFromFront.js                                 :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:45:45 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:45:47 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “removeFromFront”.

Given an array, “removeFromFront” returns the given array with its first element removed.

Notes:
* You should be familiar with the method ‘shift’.*/

function removeFromFront(arr){
    arr.shift();
    return arr;
}

var output = removeFromFront([1, 2, 3]);
console.log(output);