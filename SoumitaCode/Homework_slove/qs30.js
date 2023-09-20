let num=369;
let sum=0;
while(num>0){
    let r=num%10;
    sum=sum*10+r;
    num=Math.floor(num/10);
}
while(sum>0){
    let r=sum%10;
    console.log(r);
    sum=Math.floor(sum/10);
}