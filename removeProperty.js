// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   removeProperty.js                                  :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 12:24:26 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 12:24:28 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “removeProperty”.
Given an object and a key, “removeProperty” removes the given key from the 
given object.*/

function removeProperty(obj, key){
    delete obj[key];
}

const monObjet = {
    name: 'houssein'
}

removeProperty(monObjet, "name");
console.log(monObjet);

