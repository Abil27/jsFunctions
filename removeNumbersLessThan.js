/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeNumbersLessThan.js                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 15:08:20 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 15:10:26 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/* Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.
*/

function removeNumbersLessThan(num, obj) {
  for (let i in obj) {
    if (obj[i] < num) {
      delete obj[i];
    }
  }
  return obj;
}

let obj = {
  a: 8,
  b: 2,
  c: "montana"
};
removeNumbersLessThan(5, obj);
console.log(obj);
