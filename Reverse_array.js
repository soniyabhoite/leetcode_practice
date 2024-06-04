//Q.5 Array Reverse

var arr=[2,1,3,4,5]
var revArr=[]
function reverseArray(arr)
{
    // for (let index = arr.length-1; index >= 0; index--) {
    //    console.log(arr[index])
        
    // }

    for (let index = arr.length-1; index >=0 ; index--) {
       revArr.push(arr[index])
    }
    console.log("reverse array:" ,revArr)
}

reverseArray(arr)