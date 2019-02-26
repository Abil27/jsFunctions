/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   joinThreeArrays.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 17:15:00 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 17:17:53 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.*/

function joinThreeArrays(arr1, arr2, arr3) {
  // first Method
  // first = arr1.concat(arr2);
  // second = first.concat(arr3);
  // return second;
  // second method
  return arr1.concat(arr2, arr3);
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output);
