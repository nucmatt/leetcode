// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// where n is the number of stairs to climb
const climbStairs = (stairs) => {
    // since you can only take 0, 1, or 2 steps at a time, steps starts in that sequence
    const steps = [0, 1, 2];
    // every extra stair can be walked up in the number of ways as the previous two stair numbers combined so we tabulate that in the steps array
    for (let i = 3; i <= stairs; i++) {
        steps[i] = steps[i-1] + steps[i-2];
    }
    // once the combinations are tabulated, return the index of the given numbers of stairs
    return steps[stairs];
};

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));
