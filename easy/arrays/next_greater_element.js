// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// Constraints:

//     1 <= nums1.length <= nums2.length <= 1000
//     0 <= nums1[i], nums2[i] <= 104
//     All integers in nums1 and nums2 are unique.
//     All the integers of nums1 also appear in nums2.

const nextGreaterElement = (nums1, nums2) => {
    // base cases
    // define variables
    const results = [];
    // logic
    // loop over nums 1
    for (let num of nums1) {
        // for each index of nums1, find the index of the same value in nums 2
        let index = nums2.indexOf(num);
        // loop over nums 2, starting at the index found above + 1
        for (let i = index + 1; i <= nums2.length; i++) {
            // if the nums 2 value is > the current nums1 value, push the current nums 2 index to the results array
            if (nums2[i] > num) {
                results.push(nums2[i]);
                break;
            }
            // if the loop over nums2 completes with no answer, push -1 to the result array
            if (i === nums2.length) results.push(-1)
        }
    }
    // return statement
    // return the results array once the loop over nums1 is complete
    return results;
}

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement(nums1 = [2,4], nums2 = [1,2,3,4]))
