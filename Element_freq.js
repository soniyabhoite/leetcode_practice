// element frequency

var arr=[1,2,1]
var frequency={}
var visited=-1
function element_Frequency()
{

    for (let index = 0; index < arr.length; index++) {
        var cnt=1
        for(let j=index+1;j<arr.length;j++)
            {
                if(arr[index]!=-1 )
                    {
                        if(arr[index]==arr[j])
                            {
                                cnt++
                                arr[j]=-1
                            }
                    }
            }
           
              
               frequency[arr[index]]=cnt
                
           
    }
    console.log(frequency)
    

}

element_Frequency()