// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getLengthOfTwoWords.js                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 16:01:39 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 16:01:40 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //


/*Write a function called “getLengthOfTwoWords”.
Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.*/

function getLengthOfTwoWords(word1, word2){
    return word1.length + word2.length;
}

const word1 = prompt("give me first word");
const word2 = prompt("give the second word");
const lengthOfTwo = getLengthOfTwoWords(word1, word2);
console.log(lengthOfTwo);