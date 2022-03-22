// You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

// Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

// Example 2:

// Input: salary = [1000,2000,3000]
// Output: 2000.00000
// Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
// Average salary excluding minimum and maximum salary is (2000) / 1 = 2000

// Constraints:

//     3 <= salary.length <= 100
//     1000 <= salary[i] <= 106
//     All the integers of salary are unique.

const average = (salary) => {
    // base cases
    // define variables
    let highSalary = 0; 
    let lowSalary = Infinity;
    let totalSalary = 0;
    // logic
    // we need to loop through the salaries, adding them together and keeping track of the highest and lowest salary
    for (let i of salary) {
        if (i > highSalary) highSalary = i;
        if (i < lowSalary) lowSalary = i;
        totalSalary += i;
    }
    // subtract the highest and lowest salaries from the total found
    totalSalary -= (highSalary + lowSalary);
    // return statement
    // return the salary total found above, divided by the salary array length minus two(since highest and lowest are excluded)
    return (totalSalary / (salary.length - 2));
};

console.log(average([4000,3000,1000,2000]));
console.log(average([1000,2000,3000]));
