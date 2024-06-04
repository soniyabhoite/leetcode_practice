
//Q.2  find key
//Create a function doesKeyExist(obj, key) that checks if a given key exists in the
//provided object (obj).

var obj={name:"abc",age:25,address:"xyz"}
var key="age"
function doesKeyExist(obj,key)
{

   // var result=key in obj
    var result=obj.hasOwnProperty(key)

    if(result)
        console.log(key ,"exists in obj")
    else
        console.log(key ,"does not exists in obj")
}

doesKeyExist(obj,key)