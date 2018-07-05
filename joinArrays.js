// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   joinArrays.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:26:00 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:26:02 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “joinArrays”.
Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, 
followed by the elements in “arr2”*/

function joinArrays(arr1, arr2){
    return arr1.concat(arr2);
}

var output = joinArrays([1, 2], [3, 4]);
console.log(output);
