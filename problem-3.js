// 3. Write a JavaScript program to find the most frequent element in an array and return it. 


var arr=[3, 5, 2, 5, 3, 3, 1, 4, 5];
var mostFrequent = 1;
var maxCount = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 maxCount++;
                if (mostFrequent<maxCount)
                {
                  mostFrequent=maxCount; 
                  item = arr[i];
                }
        }
        maxCount=0;
}
console.log(item) ;
