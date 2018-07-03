// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   checkAge.js                                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/03 12:51:31 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/03 12:51:33 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “checkAge”. 
Given a person’s name and age, “checkAge” returns one of two messages:
“Go home, {insert_name_here}!”, if they are younger than 21.
“Welcome, {insert_name_here}!”, if they are 21 or older.
Naturally, replace “{insert_name_here}” with the given name. :)*/

function checkAge(name, age){
    return age <= 20 ? `Go home ${name}` : `Welcome, ${name}`;
}

const checkHoussein = checkAge("Houssein", 27);
console.log(checkHoussein);
