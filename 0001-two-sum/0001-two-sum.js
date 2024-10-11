/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();  // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Calculate the complement

        if (map.has(complement)) {
            // Return a flat array with the two indices
            return [map.get(complement), i];  
        }
        // Otherwise, store the current number and its index in the map
        map.set(nums[i], i);
    }
};