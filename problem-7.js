
function secondSmallest(arr,length){
		let smallest;
		let secondSmallest; 

		
			if( arr[0]< arr[1]) {  
				smallest = arr[0];
                secondSmallest=arr[1];  
			}  

			else  { 
                smallest=arr[1];
				secondSmallest = arr[0]; 
			} 

            for(let i=0;i<length;i++){
               if(arr[i]<smallest){
                secondSmallest=smallest;
                smallest=arr[i];
               } 
               else if(arr[i]<secondSmallest && arr[i]>smallest){
               secondSmallest=arr[i];
               }
            }
            return secondSmallest;
		} 
        
    
		const result=secondSmallest([2, 5, 7, 3, 9, 10, 11, 1],8);
        console.log(result);