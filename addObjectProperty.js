// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   addObjectProperty.js                               :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 13:32:06 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 13:32:08 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “addObjectProperty”.

Given two objects and a key, “addObjectProperty” sets a new property on the 1st object
at the given key. The value of that new property is the entire 2nd object*/

function addObjectProperty(obj1, key, obj2){
    return obj1[key] = obj2;
}

var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  addObjectProperty(person1, 'manager', person2);
  console.log(person1.manager);
  console.log(person1)