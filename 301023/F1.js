let arr = [3,7,8,3,4,7,33];
let fmap =new Map();
for(let i = 0;i<arr.length;i++){
    let temp = arr[i];
    if(fmap.has(temp)){
        let v = fmap.get(temp);
        v = v+1;
        fmap.set(temp,v);

    }else{
        fmap.set(temp,1);
    }

}

console.log(fmap);