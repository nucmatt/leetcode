// Find bad commit(version) using the minimum API calls(to isBadVersion) when given the number of commits(versions). Imitates git bisect command!

const solution = (isBadVersion) => {
	return function (n) {
		// define variables
		let start = 1,
			end = n;
		// while start does not equal end check if the version halfway between start and end is bad
		while (start < end) {
			const mid = Math.floor((start + end) / 2);
			// if yes, the bad version is at or before current version
			// if no, the bad version is after the current version
			isBadVersion(mid) ? (end = mid) : (start = mid + 1);
		}
		// once the start and end versions are the same, you have found the first bad version
		return start;
	};
};
