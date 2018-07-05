// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getLengthOfThreeWords.js                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/05 07:23:00 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/05 07:23:02 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getLengthOfThreeWords”.
Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths*/

function getLengthOfThreeWords(word1, word2, word3){
    return (word1 + word2 + word3).length;
}

var output = getLengthOfThreeWords('Houssein', 'Abil', 'Takef');
console.log(output);