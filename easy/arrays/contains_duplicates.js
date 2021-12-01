// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

const containsDuplicate = (nums) => {
    // base cases
    if (nums.length < 2) return false;
    // create variables
    const set = new Set();
    // logic
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    // return statement
    return false;
}
