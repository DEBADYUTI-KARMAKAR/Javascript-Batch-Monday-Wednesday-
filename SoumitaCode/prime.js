let num=6;
let flag=true;
for(let i=2;i<=num/2;i++){
    if(num%i==0){
        flag=false;
        break;
    }
}
if(flag==true){
    document.write("Prime Number");
}else{
    document.write("Not Prime");
}