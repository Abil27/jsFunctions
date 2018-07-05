// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   computePower.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 23:59:41 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 23:59:43 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “computePower”.
Given a number and an exponent, “computePower” returns the given number, raised 
to the given exponent.*/

function computePower(number, exponent){
    return number ** exponent;
}

var output = computePower(2, 3);
console.log(output);