// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isPersonOldEnoughToVote.js                         :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 16:39:18 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 16:39:21 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isPersonOldEnoughToVote”.
Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToVote” returns whether the given person is old enough to vote.

Notes:
* The legal voting age in the United States is 18.*/

function isPersonOldEnoughToVote(person){
    return person.age > 17;
}

var obj = {
    age: 19
}

console.log(isPersonOldEnoughToVote(obj));

