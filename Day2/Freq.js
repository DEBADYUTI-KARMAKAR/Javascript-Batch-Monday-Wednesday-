let str = "Hello JavaScript";
let frq = 0;
let k = 'a';
for(let i = 0;i<str.length;i++){
    let ch = str.charAt(i);
    if(ch===k){
        frq++;
    }
}

console.log(frq);