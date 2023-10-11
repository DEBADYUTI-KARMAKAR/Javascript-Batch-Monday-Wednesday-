let num =124;
let n = num;
let c = 1;
while(n>10){
    c = c*10;
    n=parseInt(n/10);
}

while(num>1){
let q = parseInt(num/c);
console.log(q);
num = parseInt(num%c);
c=parseInt(c/10);
}
