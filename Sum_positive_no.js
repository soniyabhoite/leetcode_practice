//var arr=[1,-2,-3,4,5]
var arr=[-1,-2,-3,-4,-5]
function sumOfPositive()
{
    var sum=0
        for(var i=0;i<arr.length;i++)
            {
                if(arr[i]>0)
                    {
                         sum=sum+arr[i]
                    }
            }
            console.log("sum of positive no. ",sum)
}

sumOfPositive()