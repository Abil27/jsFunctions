// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getAllElementsButFirst.js                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:35:57 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:36:00 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getAllElementsButFirst”.
Given an array, “getAllElementsButFirst” returns an array with all the elements but the first*/

function getAllElementsButFirst(arr){
   // return arr.slice(1);
   arr.shift();
   return arr;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output);