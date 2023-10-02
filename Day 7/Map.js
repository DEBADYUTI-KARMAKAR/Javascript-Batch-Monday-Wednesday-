let data = ['d1','d2','d3','d4'];
for(let i = 0;i<data.length;i++){
    console.log(data[i]);
}
let res = data.map((el)=>{
    console.log(el);
    return el;
})

console.log(res);

let arr = [3,5,6,8];

let datam = arr.map((e)=>{
    return e*e;
})
console.log(datam);