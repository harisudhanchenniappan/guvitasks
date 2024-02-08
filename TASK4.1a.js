//odd numbers in an array - anonymous function
let a1 = function(a){
    let c=[];
    for(let x=0;x<a.length;x++){
    if(a[x]%2==1)
    c.push(a[x]);}
console.log(c.join(' '));
}
let b=[1,2,3,4,5,6,7,8,9]
a1(b);

//odd numbers in an array - IIFE function
((a)=>{
    let c=[];
    for(let x=0;x<a.length;x++){
    if(a[x]%2==1)
    c.push(a[x]);}
console.log(c.join(' '));
})([1,2,3,4,5,6,7,8,9])

//odd numbers in an array - arrow function
let a2 =(a)=>{
    let c=[];
    for(let x=0;x<a.length;x++){
    if(a[x]%2==1)
    c.push(a[x]);}
console.log(c.join(' '));
}
let b1=[1,2,3,4,5,6,7,8,9]
a1(b);


