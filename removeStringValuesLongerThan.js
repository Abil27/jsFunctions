/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   removeStringValuesLongerThan.js                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 15:18:17 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 15:18:53 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.
*/

function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let i in obj) {
    if (obj[i].length > num) {
      delete obj[i];
    }
  }
  return obj;
}

let obj = {
  name: "Montana",
  age: 20,
  location: "Texas"
};
removeStringValuesLongerThan(6, obj);
console.log(obj);
