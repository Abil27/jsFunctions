// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   addFullNameProperty.js                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 18:27:10 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 18:27:13 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “addFullNameProperty”.
Given an object that has a “firstName” property and a “lastName” property, 
“addFullNameProperty” adds a “fullName” property whose value is a string with the 
first name and last name separated by a space.*/

function addFullNameProperty(obj){
    obj.fullName = `${obj.firstName} ${obj.lastName}`
    return obj.fullName;
}

const monObjet = {
    firstName: "Houssein",
    lastName: "Abil"
}

const fullName = addFullNameProperty(monObjet);
console.log(fullName);