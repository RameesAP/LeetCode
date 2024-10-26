let nums1 = [1, 2, 3, 0, 0, 0]; // nums1 has space at the end
let m = 3; // Number of valid elements in nums1
let nums2 = [2, 5, 6]; // Elements to merge into nums1
let n = 3; // Number of elements in nums2

function merge(nums1,m,nums2,n){
    let p1 = m - 1; // Pointer for last element in nums1's valid part
    let p2 = n - 1; // Pointer for last element in nums2
    let p = m + n - 1;  // Pointer for last position in nums1
    
    while(p1 >= 0 && p2 >= 0){
        if(nums1[p1]>nums2[p2]){
            // Place the larger value at the end of nums1
            nums1[p] = nums1[p1];
            p1--; // Move nums1 pointer to the left
        }else{
            // Place nums2's value in nums1
            nums1[p]=nums2[p2];
            p2--; // Move nums2 pointer to the left
        }
        p--; // Move the main pointer to the left
    }
    // If nums2 still has remaining elements, place them at the start of nums1
    while(p2>=0){
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

merge(nums1,m,nums2,n);
console.log(nums1)