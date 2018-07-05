// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   computePerimeterOfARectangle.js                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:53:39 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:53:41 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “computePerimeterOfARectangle”.
Given a length and a width describing a rectangle, “computePerimeterOfARectangle” 
returns its perimter.*/

function computePerimeterOfARectangle(length, width){
    return (length + width) * 2;
}

var output = computePerimeterOfARectangle(5, 2);
console.log(output);
