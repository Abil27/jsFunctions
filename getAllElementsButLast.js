// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getAllElementsButLast.js                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:43:16 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:43:19 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getAllElementsButLast”.
Given an array, “getAllElementsButLast” returns an array with all the elements but the last.*/

function getAllElementsButLast(arr){
    arr.pop();
    return arr;
}

var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output);