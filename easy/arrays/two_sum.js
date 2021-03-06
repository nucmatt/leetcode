const nums1 = [2,7,11,15];
const target1 = 9; // ans = [0,1]
const nums2 = [3,2,4];
const target2 = 6; // ans = [1,2]
const nums3 = [3,3];
const target3 = 6; // ans = [0,1]

const twoSum = (nums, target) => {
    for (i = 0; i < nums.length; i++) {
        let value = target - nums[i];
        for (j = i + 1; j < nums.length; j++) {
            if (nums[j] === value) {
                return [i, j]
            }
        }
    }
    // grab number and index from nums
    // determine needed value
    // find needed value in array
    // return array of indeces for the two values
}

console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));
console.log(twoSum(nums3, target3));

const twoSum2 = (nums, target) => {
    // define variables
    // the map will contain every seen num in nums and it's index
    const map = new Map();
    // logic
    // loop through nums
        for (let i = 0; i < nums.length; i++) {
            // term = target - nums[i](a term is a value in an arithmetic sequence)
            const term = target - nums[i];
            // if map has term, return terms index and current index
            if (map.has(term)) {
                return [map.get(term), i];
            }
            // else add the current num and index to the map
            map.set(nums[i], i);
        }
    // return statement
}
