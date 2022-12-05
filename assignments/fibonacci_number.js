// print fibonacci series (1st 10 numbers)



// function fib(n){

//     if(n==0){
//         return 0;
//     }
//     else if(n==1){
//         return 1;
//     }
//     else{
//         // return fib(n-1) + fib(n-2);
//         // console.log(fib(n-1));
//     }
// }


// let f = fib(10);


// console.log(f);

// 0 1 1 2 3 5 8 13 21 34


let a=0,b=1,n=10,nextNumber=0;

for(let i=0;i<n;i++){

    // console.log(nextNumber);

    nextNumber = a+b;
    console.log(nextNumber);
    a=b;
    b=nextNumber;
}