// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getProperty.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 12:09:26 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 12:09:29 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined*/

function getProperty(obj, key)
{
    return obj[key];
}

const monObjet = {
    name: 'Houssein'
}
console.log(getProperty(monObjet, 'name'));