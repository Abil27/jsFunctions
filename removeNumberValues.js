/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeNumberValues.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 16:06:48 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 16:07:12 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose valuse are numbers.*/

function removeNumberValues(obj) {
  // your code here
  for (let i in obj) {
    if (typeof obj[i] === "number") {
      delete obj[i];
    }
  }
  return obj;
}

var obj = {
  a: 2,
  b: "remaining",
  c: 4
};
removeNumberValues(obj);
console.log(obj);
