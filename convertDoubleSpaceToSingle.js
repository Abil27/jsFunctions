/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   convertDoubleSpaceToSingle.js                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ahoussei <ahoussei@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/02/26 17:09:10 by ahoussei          #+#    #+#             */
/*   Updated: 2019/02/26 17:09:49 by ahoussei         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

/*Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.*/

function convertDoubleSpaceToSingle(str) {
  // your code here
  let singleSpace = str.split("  ");
  let newStr = singleSpace.join(" ");
  return newStr;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);
