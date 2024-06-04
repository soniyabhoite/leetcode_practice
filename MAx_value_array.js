//Q.3 max value of array 
var arr=[1,2,10,4,5]
var max =arr[0]

function max_value(arr)
{
      for (let index = 0; index < arr.length; index++) {
        if(arr[index]>max)
            {
                max=arr[index]
            }
        
      }
      console.log("max value of array",max)
}

max_value(arr)