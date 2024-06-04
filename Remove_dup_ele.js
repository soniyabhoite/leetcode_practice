// Remove duplicate elements

var arr=[1,1,2,5,4,3,-1,-1,5]
var array=[]

function removeElement(arr,array)
{
    for (let index = 0; index < arr.length; index++) {
        var cnt=0
     for(let j=index+1;j<arr.length;j++)
        {
            if(arr[index]==arr[j])
                {
                    cnt++
                }

        }
        if(cnt==0)
            {
                array.push(arr[index])
            }
    
    }
   
    console.log("unique element of array:",array)
}

removeElement(arr,array)