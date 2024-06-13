var arr=[14,0,76,0,45,0,9,4,0,5]
function shiftZero()
{
   var i=0,j=0
   while(j<arr.length)
    {
        if(arr[j]!=0)
            {
                var temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
                i++

            }
            j++

    }
    console.log(arr)
        

}

shiftZero()