// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isEitherEven.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 18:02:41 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 18:02:44 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isEitherEven”.
Given two numbers, “isEitherEven” returns whether or not either one of the given 
numbers is even.*/

function isEitherEven(num1, num2){
    return (num1 % 2 === 0) || (num2 % 2 === 0);
}
