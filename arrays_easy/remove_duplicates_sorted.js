let nums1 = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];

const removeDuplicates = (array) => {
    for (i = 0; i < array.length; i++) {
        if (array[i] === array[i+1]) {
            array.splice(i, 1);
            // you must decrement i here because the problem requires modifying the array in place. Splicing changes the length of the array. If i is not then decremented after the splice, the next value after the splice is skipped, i.e. nums2 = [0, 1, 1, 2, 3, 4] with out i--.
            i--;
        } 
    }
    return array;
};

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));
