/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// naive approach
// var twoSum = function(nums, target) {
//     for (let i=0; i<nums.length; i++){
//         for (let j=i+1; j<nums.length; j++){
//             let t = nums[i] + nums[j];
//             if (t === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

var twoSum = function(nums, target) {
    let mySet = new Set();
    let n = 1;
    for (let i=0; i < nums.length; i++) {
        
//      check if current value exists in set and return index of complement and index of current.
        if (mySet.has(nums[i])){
                return [[...mySet].indexOf(nums[i]), i]
        }
        
//      check if set has duplicate and increment the value to be inserted.
        if (mySet.has(target-nums[i])) {
            n++;
            mySet.add(target + n - nums[i]);   
        }
        
//      add value to set if no duplicate.
        mySet.add(target - nums[i]);
    }
};
