/* : Implement a function sumObjectValues that calculates the sum of all numeric values
in an object */

var obj={a:10,b:20,c:-10}
const values=Object.values(obj)
function sumObjectValues()
{

    var sum=values.reduce((a,b)=>{
        return a+b

    },0)
    console.log("sum :" ,sum)
}
sumObjectValues()