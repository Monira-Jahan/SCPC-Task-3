//4. Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. 

function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};
const result=twoSum([1, 3, 6, 8, 11, 15], 9);
console.log(result);

