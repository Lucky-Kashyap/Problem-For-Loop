// print palindrome 1 to 1000



for(let i=1;i<=1000;i++){

    let rem=0,rev=0;

    let temp = i;

    while(temp!=0){
        rem = temp%10;
        rev = rev*10 + rem;
        temp =parseInt(temp/10);
    }

    if(i==rev){
        console.log(i);
    }

}