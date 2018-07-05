// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isPersonOldEnoughToDrink.js                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 16:43:04 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 16:43:06 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isPersonOldEnoughToDrink”.
Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToDrink” returns whether the given person is old enough 
to drink.

Notes:
* The legal drinking age in the United States is 21.*/

function isPersonOldEnoughToDrink(person){
    return person.age > 20
}

var objs = {
    age: 21
}

console.log(isPersonOldEnoughToDrink(objs));
