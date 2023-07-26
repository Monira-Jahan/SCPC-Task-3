var arr=[3, 5, 2, 5, 3, 3, 1, 4, 5];
var mostFrequent = 1;
var maxValue = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 maxValue++;
                if (mostFrequent<maxValue)
                {
                  mostFrequent=maxValue; 
                  item = arr[i];
                }
        }
        maxValue=0;
}
console.log(item) ;
