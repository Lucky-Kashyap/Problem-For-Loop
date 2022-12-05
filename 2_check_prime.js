

// check if a number is prime or not


let n=24;


let bool = true;


for(let i=2;i<n;i++)
{
    if(n%i==0){
        bool=false;
        break;
    }
}

if(bool==true){
    console.log("Number is prime");
}
else{
    console.log("Number is not prime");
}







