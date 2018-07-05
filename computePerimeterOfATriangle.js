// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   computePerimeterOfATriangle.js                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 23:03:11 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 23:03:15 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “computePerimeterOfATriangle”.
Given 3 sides describing a triangle, “computePerimeterOfATriangle” 
returns its perimter.*/

function computePerimeterOfATriangle(side1, side2, side3){
    return side1 + side2 + side3;
}
var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output);