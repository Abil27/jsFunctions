// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   computeTripledAreaOfARectangle.js                  :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 23:22:32 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 23:22:34 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “computeTripledAreaOfARectangle”.
Given a length and width of a rectangle, “computeTripledAreaOfARectangle” 
returns the rectangle’s area, multiplied by 3*/

function computeTripledAreaOfARectangle(length, width){
    return (length * width) * 3;
}

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output);