// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   isPersonOldEnoughToDrive.js                        :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: ahoussei <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2018/07/04 16:26:34 by ahoussei          #+#    #+#             //
//   Updated: 2018/07/04 16:26:36 by ahoussei         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

/*Write a function called “isPersonOldEnoughToDrive”.
Given a “person” object, that contains an “age” property, 
“isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.
Notes:
* The legal driving age in the United States is 16.*/

function isPersonOldEnoughToDrive(person){
    return person.age > 42;
}

var obj = {
    age: 53
  };
  var output = isPersonOldEnoughToDrive(obj);
  console.log(output)