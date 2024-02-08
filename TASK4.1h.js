//rotate an array k times - anonymous function
let a=function(a,b){
    let d=a.length-1;
    for(let x=1;x<=b;x++){
        a.unshift(a[d])
        a.pop(a[d])
    }
    console.log(a)
}
let p=[1,2,3,4,5]
let k=4;
a(p,k)
//rotate an array k times - IIFE function
((a,b)=>{
    let d=a.length-1;
    for(let x=1;x<=b;x++){
        a.unshift(a[d])
        a.pop(a[d])
    }
    console.log(a)
})([1,2,3,4,5],4)