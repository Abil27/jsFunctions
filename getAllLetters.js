// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getAllLetters.js                                   :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/06 23:03:30 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/06 23:03:32 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getAllLetters”.
Given a word, “getAllLetters” returns an array containing every character in the word.

Notes:
* If given an empty string, it should return an empty array*/

function getAllLetters(str){
    return str.split('');
}

var output = getAllLetters('Houssein');
console.log(output);