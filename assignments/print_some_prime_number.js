// prime numbers from 1 to 100 ?


let from = 1;
let to = 100;

let bool = true;

for(let i=from;i<to;i++){

    if(i%2==0){
        bool=false;
        
    }
    else{
        console.log(i);
    }
}