// print numbers from 1 to 200 which are divisible by 3 & 6 but not by 5 ?

let from = 1;
let to = 200;


for(let i=from;i<=to;i++){
    if((i%3==0 && i%6==0) && i%5==0){
        console.log(i);
    }
}



// Output


// 30
// 60
// 90
// 120
// 150
// 180