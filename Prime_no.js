function primeNo()
{
   
    for(let i=100 ;i>=1;i--)
        {
            var flag=0
            for(let j=2 ;j<i;j++)
                {
                    if(i%j==0)
                        {
                            flag=1
                            break
                        }
                }
                if(flag==0 && i!=1)
                   console.log(i)
        }
}

primeNo()