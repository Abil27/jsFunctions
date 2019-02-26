/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeStringValues.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 16:09:51 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 16:10:14 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.*/

function removeStringValues(obj) {
  // your code here
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
  return obj;
}

var obj = {
  name: "Sam",
  age: 20
};
removeStringValues(obj);
console.log(obj);
