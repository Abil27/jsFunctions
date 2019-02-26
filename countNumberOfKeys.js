/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   countNumberOfKeys.js                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 15:44:50 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 15:45:59 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.*/

function countNumberOfKeys(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count;
}

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output);
