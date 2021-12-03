const nums1 = [1,2,2,1];
const nums2 = [2,2]; // ans = [2,2]
const nums3 = [4,9,5];
const nums4 = [9,4,9,8,4]; // ans = [4,9] OR [9,4]
const nums5 = [1];
const nums6 = [1]; // ans = [1]
const nums7 = [1, 2]; // with nums5 ans = [1]
const nums8 = [1, 1];

const intersect = (arr1, arr2) => {
    let ans = [];
    let shortArr = arr1.length <= arr2.length ? arr1 : arr2;
    let longArr = arr1.length > arr2.length ? arr1 : arr2;
    for (i = 0; i < shortArr.length; i++) {
        for (j = 0; j < longArr.length; j++) {
            if(shortArr[i] === longArr[j]) {
                ans.push(longArr[j]);
                longArr.splice(j, 1);
                break
            }
        }
    };
    return ans;

}

console.log(intersect(nums1, nums2)
);
console.log(intersect(nums3, nums4)
);
console.log(intersect(nums5, nums6)
);
console.log(intersect(nums7, nums8)
);
console.log(intersect(nums5, nums7)
);

const intersect2 = (nums1, nums2) => {
    // base cases
    // define variables
    // a map to hold the numbers contained in the first array
    const map = new Map();
    // an empty array to contain the intersection results
    const results = [];
    // logic
        // iterate over nums1
        for (const num of nums1) {
            // if the map already contains the number raise count by 1
            if (map.has(num)) { 
                map.set(num, map.get(num) + 1);
            // else add the number to the map, initialized at 1
            } else {
                map.set(num, 1);
            }
        }
        // iterate over nums2
        for (const num of nums2) {
            // if map has number and there are still instances left
            if (map.get(num) > 0) {
                // push number to results array
                results.push(num);
                // decrement instance of number in map
                map.set(num, map.get(num) - 1);
            }
        }
    // return statement
    return results;
}
