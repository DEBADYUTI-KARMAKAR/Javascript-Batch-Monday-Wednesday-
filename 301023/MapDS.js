let post = new Map([
    ['like',6],
    ['dislike',30]
])
post.set('dislike',60);
post.set('report',6);
console.log(post);
console.log(post.keys());

let frq = new Map();
frq.set(1,5);
frq.set(2,4);
frq.set(3,7);
console.log(frq);
console.log(frq.size);
console.log(frq.get(2));
console.log(frq.delete(21));

console.log(frq.size);