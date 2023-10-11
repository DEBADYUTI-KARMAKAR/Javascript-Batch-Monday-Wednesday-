// alert("Hello");
let p = document.getElementById("p1");
// p.style.color = 'red';
// p.style.fontSize = '200px';

console.log(p);
console.log(p.textContent);

let n = document.querySelector("p");
console.log(n);
console.log(n.innerHTML);
console.log(n.innerText);
console.log(n.textContent);

let footballer = document.querySelector('.fp');
console.log(footballer);
console.log(footballer.innerHTML);
console.log(footballer.innerText);

let qsa = document.querySelectorAll('ul>li');
console.log(qsa); 

qsa.forEach((data)=>{
    console.log(data.innerText);
})

let oList = document.createElement("ol");
document.body.appendChild(oList);

let l1 = document.createElement('li');
l1.textContent = 'Sunil';
oList.appendChild(l1);

let l2 = document.createElement('li');
l2.textContent = 'Mahesh';
oList.appendChild(l2);

let p2 = document.getElementById('p2');
let btn = document.getElementById('book');
btn.addEventListener('click',()=>{
    p2.style.color = 'blue';
})