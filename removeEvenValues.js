/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeEvenValues.js                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 15:33:47 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 15:37:07 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "removeEvenValues".

Given any object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.*/
function removeEvenValues(obj) {
  for (let i in obj) {
    if (obj[i] % 2 === 0) {
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
removeEvenValues(obj);
console.log(obj);
