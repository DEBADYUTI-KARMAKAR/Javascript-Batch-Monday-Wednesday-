let [a,b,c] = [10,33,66];
console.log(a);
console.log(b);
let fno = 10;
let sno = 55;
// let temp = fno;
// fno = sno;
// sno = temp;

[fno,sno] = [sno,fno];
console.log(fno+" "+sno);

let [f,s,t,...temp]=[1,2,3,4,5,6,9,7,8];

console.log(f+" "+s+" "+t);
console.log(temp);

let arr = [10,20,3,30,78,96];
console.log(arr);
console.log(...arr);

arr = [15,...arr,12];
console.log(arr);