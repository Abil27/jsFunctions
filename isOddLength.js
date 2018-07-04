// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isOddLength.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 18:05:52 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 18:05:56 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //


/*Write a function called “isOddLength”.
Given a word, “isOddLength” returns whether the length of the given word is odd.*/

function isOddLength(word){
    return word.length % 2 === 1;
}