// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   areBothOdd.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 18:00:31 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 18:00:33 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd*/

function areBothOdd(num1, num2){
    return (num1 % 2 === 1) && (num2 % 2 === 1);
}
