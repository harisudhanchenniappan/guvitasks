//remove duplicates in an array - anonymous function
let a=function(b){
    let n=[];
    for(let c=0;c<b.length;c++){
        if(n.indexOf(b[c])==-1)
        n.push(b[c])
    }
    console.log(n)
}
let d=[1,2,3,1,5,3,4]
a(d)
//remove duplicates in an array - IIFE function
((b)=>{
    let n=[];
    for(let c=0;c<b.length;c++){
        if(n.indexOf(b[c])==-1)
        n.push(b[c])
    }
    console.log(n)
})([1,2,3,1,5,3,4])