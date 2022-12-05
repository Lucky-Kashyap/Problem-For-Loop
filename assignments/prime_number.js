// check if a number is prime or not ?


let num = 22;

let bool = true;

for(let i=2;i<num;i++){

    if(num%i==0){
        bool=false;
        break;
    }
}

if(bool){
    console.log(num + "  is a prime number");
}
else{
    console.log(num + ' is not a prime number');
}