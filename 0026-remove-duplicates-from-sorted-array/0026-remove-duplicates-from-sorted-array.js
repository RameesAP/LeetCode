/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0,0,1,1,1,2,2,3,3,4]

function removeDuplicates(nums){
    if(nums.length === 0 ) return 0;
    
    let i=0;
    
    for (let j=1;j<nums.length;j++){
        if(nums[j] !== nums[i]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i+1
}

const k = removeDuplicates(nums);

// console.log(k)
console.log(nums.slice(0,k));