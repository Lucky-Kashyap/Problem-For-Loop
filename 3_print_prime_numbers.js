// print all prime numbers from 1 to 100







let ct=0,n=0,i=1,j=1;  
while(n<25)  
{  
    j=1;  
    ct=0;  
    while(j<=i)  
    {  
        if(i%j==0)  
        ct++;  
        j++;   
    }  
    if(ct==2)  
    {  
        console.log(i);  
        n++;  
    }  
    i++;  
}  



// print the numbers between LOW and HIGH that are evenly divisible by four but not by five.

// for ex - take two variables low = 10, high = 100


