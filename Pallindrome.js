function stringPallindrome(str)
{
    var str_arr=str.split('')
    var rev_str=str_arr.reverse()
    var revstr=rev_str.join('')
    if(str==revstr)
        {
            console.log(str ,"is pallindrome")
        }
        else
        {
            
            console.log(str ,"is not pallindrome")
        }
}

stringPallindrome("hello")

function numberPallindrome(num)
{
    var temp=num
    let sum=0
    var b=0
    while(num>0)
        {
           
             b=num%10
            sum=sum*10+b
            num=parseInt(num/10)
        }
       
        if(temp==sum)
            {
                console.log(temp,"is pallindrome")
            }
            else{
                console.log(console.log(temp,"is not pallindrome"))
            }

}

numberPallindrome(122)