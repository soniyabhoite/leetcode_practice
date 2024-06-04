//Q.4) Write a function countProperties that takes an object as input and returns the total
//number of properties (keys) it contain
//count only unique key 

var obj={a:1,b:2,c:3}
var cnt=0

function countProperties(obj)
{
    let key
    for(key in obj)
        {
            cnt++
            console.log(key,cnt)
        }

        console.log("key exists in object :",cnt)

}

countProperties(obj)