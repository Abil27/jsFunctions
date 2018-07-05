// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   computeAreaOfACircle.js                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 23:57:23 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 23:57:25 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “computeAreaOfACircle”.
Given the radius of a circle, “computeAreaOfACircle” returns its area*/

function computeAreaOfACircle(radius){
    return radius * radius * Math.PI;
}

var output = computeAreaOfACircle(4);
console.log(output)