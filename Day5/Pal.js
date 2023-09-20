let number = 212;
let temp = number;

let res = 0;

while(temp>0){
    let rem = parseInt(temp%10);
    res = (res*10) + rem;
    temp = parseInt(temp/10);
}

if(number!=res){
    console.log(number+"is not palindrome");
}else{
    console.log(number+"is palindrome");
}