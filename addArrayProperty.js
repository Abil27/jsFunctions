// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   addArrayProperty.js                                :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 22:24:17 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 22:24:19 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “addArrayProperty”.
Given an object, a key, and an array, “addArrayProperty” sets a new property on 
the object at the given key, with its value set to the given array*/

function addArrayProperty(obj, key, arr){
    return obj[key] = arr;
}

var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj);