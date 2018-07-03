// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   getFullName.js                                     :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 12:57:11 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 12:57:13 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/* Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the 
given first and last names separated by a single space*/

function getFullName(firsName, lastName){
    return `${firsName} ${lastName}`;
}

console.log(getFullName("Houssein", "abil"));
