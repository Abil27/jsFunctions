// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isEvenAndGreaterThan10.js                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 18:11:13 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 18:11:15 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isEvenAndGreaterThanTen”.
Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and 
greater than 10*/

function isEvenAndGreaterThan10(num){
    return (num > 10) && (num % 2 === 0); 
}
