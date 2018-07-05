// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   computePerimeterOfACircle.js                       :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 23:27:03 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 23:27:12 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “computePerimeterOfACircle”.
Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.*/

function computePerimeterOfACircle(radius){
    return 2 * Math.PI * radius;
}

var output = computePerimeterOfACircle(4);
console.log(output);