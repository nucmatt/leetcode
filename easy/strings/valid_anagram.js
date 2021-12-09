// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const isAnagram = (s, t) => {
	// base cases
	if (s.length !== t.length) return false;
	// define variables
	const map = new Map();
	// logic
	// hash map s
	for (let char of s) {
		map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
	}
	// loop through t
	for (let char of t) {
		// if map does not have char or char's value in map is 0, return false
		if (!map.has(char) || map.get(char) === 0) return false;
		map.set(char, map.get(char) - 1);
	}
	// return statement
	// if loop completes, s and t are anagrams
	return true;
};
