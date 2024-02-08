//sum of all numbers in an array - anonymous function
let a2 = function(a){
    let c=0;
    for(let x=0;x<a.length;x++){
    c=c+a[x];}
console.log(c);
}
let b=[1,2,3,4,5,6,7,8,9]
a2(b);
//sum of all numbers in an array - IIFE function
((a)=>{
    let c=0;
    for(let x=0;x<a.length;x++){
    c=c+a[x];}
console.log(c);
})([1,2,3,4,5,6,7,8,9])

//sum of all numbers in an array - arrow function
let a3 = function(a){
    let c=0;
    for(let x=0;x<a.length;x++){
    c=c+a[x];}
console.log(c);
}
let b3=[1,2,3,4,5,6,7,8,9]
a2(b);


