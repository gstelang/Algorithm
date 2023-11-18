# 1. Sliding window: Max consecutive ones with at most K flips

While zeroCount is no more than m: expand the window to the right (wR++) and update the count zeroCount. 
While zeroCount exceeds m, shrink the window from left (wL++), update zeroCount; 
Update the widest window along the way. The positions of output zeros are inside the best window.

```
function findZeroes(nums, k) {
	let start = 0;
	let end = 0;
	let zeroes = 0;

	// Traverse the array
	while (end < nums.length) {
		// If a zero is encountered, increment zeroes count
		if (nums[end] == 0) {
			zeroes++;
		}
		end++;

		// If zeroes count exceeds k, move start index
		if (zeroes > k) {
			if (nums[start] == 0) {
				zeroes--;
			}
			start++;
		}
	}

	// Print indexes of zeroes to be flipped
	for (let i = start;
		i <= Math.min(nums.length - 1, end); i++) {
		if (nums[i] == 0) {
			console.log(i);
		}
	}
}

let arr = [1, 0, 0, 1, 1, 0, 1, 0, 1, 1];
console.log("Indexes of zeroes to be flipped are ");
findZeroes(arr, 2);
```

# 2. Sliding window: Max number of vowels in a substring of given length.
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
<img width="509" alt="Screenshot 2023-11-16 at 7 10 00 PM" src="https://github.com/gstelang/Algorithm/assets/58006887/73a52e03-2240-4e81-9528-06ff2d860c2f">

```
function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

  let max = 0 // Max number of vowels in any window
  let current = 0 // Number of vowels in the current window

  // Count the total number of vowels from the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) max++
  }
  
  if (max === k) return max // Return if the `k` is hit

  current = max // Set the current to the max

  // Sliding window technique
  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.has(s[i - 1])) current-- // Remove the left-most vowel
    if (vowels.has(s[i + k - 1])) current++ // Add the right-most vowel

    if (current === k) return current // Return if the `k` is hit
    if (current > max) max = current // Set `max` to the `current` value, if greater
  }

  return max
};
```

# 3. Sliding window: Longest Subarray of 1's After Deleting One Element

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.


```
func longestSubarray(nums []int) int {
    left, maxWindow, lastZero := 0, 0, -1 

    for right := range nums { 
        if nums[right] == 0 {
            left = lastZero + 1
            lastZero = right 
        } 
        maxWindow = max(maxWindow, right - left)
    } 
    return maxWindow 
}

func max (x, y int) int {
    if x > y {
        return x 
    }
    return y 
} 
```
# 4. Removing Stars From a String

You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
 

Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".
Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.

```
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    const stack = [];

    // Iterate over each character in the input string
    for (const c of s) {
        // If the current character is a star and the stack is not empty, pop the topmost character
        // from the stack
        if (c === '*' && stack.length) {
            stack.pop();
        }
        // Otherwise, push the current character onto the stack
        else {
            stack.push(c);
        }
    }

    // Convert the stack to a string and return it as the output
    return stack.join('');
};
```

5. 
