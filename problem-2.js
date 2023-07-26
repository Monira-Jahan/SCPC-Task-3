function sumOfPositive(nums){
 let sum=0;
 for(let i=0;i<nums.length;i++){
    if(nums[i]>0){
        sum+=nums[i];
    }
 }
 return sum;
}
const result=sumOfPositive([2,-5,10,-3,7]);
console.log(result);