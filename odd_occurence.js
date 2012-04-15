/*
XOR table
0 	0 	0
0 	1 	1
1 	0 	1
1 	1 	0
**************************************************************************************************************
Given an array of positive integers. All numbers occur even number of times except one number which occurs odd number of times. Find the number in O(n) time & constant space.

Example:
I/P = [1, 2, 3, 2, 3, 1, 3]
O/P = 3
**************************************************************************************************************

*/

function oddoccurence(arr) {
	var odd = arr.reduce(function(curr, prev) {
		return curr ^ prev;
	});
	return odd;
}

oddoccurence([1, 2, 3, 2, 3, 1, 3]);