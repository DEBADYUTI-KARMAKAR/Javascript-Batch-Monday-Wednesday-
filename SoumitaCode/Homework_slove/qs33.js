let num=121;
let temp=num;
let sum=0;
while(num>0){
    let r=num%10;
    sum=sum*10+r;
    num=parseInt(num/10);
}
if(sum==temp){
    console.log("Palindrome Number");
}else{
    console.log("Not Palindrome Number");
}