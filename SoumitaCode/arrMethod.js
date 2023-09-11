let arr=[5,"😊",10,"hello",10];
console.log(arr);
arr.push(55);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(20);
console.log(arr);
let s=arr.includes(10);
console.log(s);
let i=arr.indexOf(10);
console.log(i);
let l=arr.lastIndexOf(10);
console.log(l);
let k=arr.length;
console.log(k);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}