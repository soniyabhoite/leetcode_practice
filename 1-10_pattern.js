/*
1 
2 3
4 5 6
7 8 9 10
       */
function oneToTen()
{
    var no=1
    var pattern=""
    // for(let i=1;i<=4;i++)
    //     {
    //          for(let j=1;j<=i;j++)
    //             {
    //                pattern=pattern+no+" "
    //                   no++
    //             }
    //           pattern=pattern+"\n"
    //     }


    for(let i=1;i<=4;i++)
        {
            no=1
             for(let j=4;j>=i;j--)
                {
                   pattern=pattern+no+" "
                      no++
                }
              pattern=pattern+"\n"
        }
       console.log(pattern)
 
}

oneToTen()