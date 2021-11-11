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
