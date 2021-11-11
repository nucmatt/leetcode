let nums1 = [1,2,3,4,5,6,7];
let nums2 = [-1,-100,3,99];

const rotate1 = (nums, k) => {
    for(i=0; i < k; i++) {
        let element = nums.pop();
        nums.unshift(element);
    }
    return nums;
}

let nums3 = [1,2,3,4,5,6,7];
let nums4 = [-1,-100,3,99];
const rotate2 = (nums, k) => {
    let elements = nums.splice(nums.length - k, k);
    return elements.concat(nums);
}


console.log(rotate1(nums1, 3));
console.log(rotate1(nums2, 2));

console.log((rotate2(nums3, 3)));
console.log((rotate2(nums4, 2)));
