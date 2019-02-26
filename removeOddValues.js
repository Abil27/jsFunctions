/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeOddValues.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 15:48:35 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 15:49:11 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.*/

function removeOddValues(obj) {
  // your code here
  for (let i in obj) {
    if (obj[i] % 2 !== 0) {
      delete obj[i];
    }
  }
  return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj);
