let nums1 = [2, 2, 1]; // 1
let nums2 = [4,1,2,1,2]; // 4
let nums3 = [1]; // 1

const singleNumber =(nums) => {
    if (nums.length === 1) {
        return nums[0];
    };
    nums.sort((a,b)=> a - b)
    for (i = 0; i < nums.length; i = i + 2){
        if (nums[i] != nums[i+1]) {
            return nums[i];
        }
    }
}

console.log(singleNumber(nums1));
console.log(singleNumber(nums2));
console.log(singleNumber(nums3));
