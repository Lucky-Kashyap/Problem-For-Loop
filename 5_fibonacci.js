

// fibonacci number


function fib(n){

    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return fib(n-2) + fib(n-1);
    }
}

let n=10;

for(let i=0;i<n;i++){
    console.log(fib(i) + " ");
}