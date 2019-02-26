/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeArrayValues.js                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 15:57:57 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 15:59:29 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.*/
function removeArrayValues(obj) {
  for (let i in obj) {
    if (Array.isArray(obj[i])) {
      delete obj[i];
    }
  }
  return obj;
}

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ["hi", "there"]
};
removeArrayValues(obj);
console.log(obj);
