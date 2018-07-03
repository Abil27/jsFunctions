// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   addPropery.js                                      :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 12:20:13 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 12:20:15 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “addProperty”.
Given an object, and a key, “addProperty” sets a new property on the given 
object with a value of true.*/

function addPropery(obj, key){
    return obj[key] = true;
}

const monObjet = {
    name: "Houssein"
}
addPropery(monObjet, "isOld");
console.log(monObjet);
