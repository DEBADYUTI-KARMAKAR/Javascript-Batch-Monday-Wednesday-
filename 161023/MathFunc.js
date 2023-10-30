console.log(Math.PI);
console.log(Math.pow(2,6));

let r = 5;
let ar = Math.PI * Math.pow(r,2);
console.log(ar);

console.log(Math.max(2,66,44,599));
console.log(Math.max(2,66,44,599,'one'));

let arr = [ 5,6,44,2,36,77];
console.log(...arr);

let na =[...arr,66];
console.log(na); 

arr=[...arr,106];
console.log(arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));

console.log(Math.sqrt(25));
console.log(Math.sqrt(-25));
console.log(Math.cbrt(25));
console.log(Math.ceil(0.11));
console.log(Math.ceil(5.4));
console.log(Math.ceil(-3.5));

console.log(Math.floor(0.9));
console.log(Math.floor(1.6));
console.log(Math.floor(-5.7));

for (let i = 0; i <10; i++) {
    console.log(Math.floor(Math.random()*5));
}


