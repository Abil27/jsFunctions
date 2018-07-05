// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   doubleSquareRootOf.js                              :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:18:22 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:18:24 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //


/*Write a function called “doubleSquareRootOf”.
Given a number, “doubleSquareRootOf” returns double its square root.*/

function doubleSquareRootOf(num){
    return (Math.sqrt(num)) * 2;
}

var output = doubleSquareRootOf(121);
console.log(output);