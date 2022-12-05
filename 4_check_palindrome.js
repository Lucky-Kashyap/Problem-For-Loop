// check palindrome or not

let n=1111;

let temp = n;

let rev=0,rem=0;

while(temp!=0){

    rem = temp%10;
    rev = rev*10 + rem;
    temp =parseInt(temp/10);
}
// console.log(n,temp,rev,rem);


if(n==rev){
    console.log(n,"The number is palindrome");
}
else{
    console.log(n,"The number is not a palindrome");
}