// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   countCharacter.js                                  :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/06 21:39:46 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/06 21:39:49 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “countCharacter”.
Given a string input and a character, “countCharacter” returns the number of occurences 
of a given character in the given string.*/
function countCharacter(str, char) {
    var charCount = 0;
    for(var i = 0; i < str.length; i++ ){
        if( str[i] === char){
            charCount++
        }
    }
    return charCount;

};

var output = countCharacter('I am a hacker', 'a');
console.log(output);