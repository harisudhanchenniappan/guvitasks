//median of 2 arrays - anonymous function
let a=function(b,c){
    let d=b.sort().concat(c.sort())
    if(d.length%2===0){
        let x=d[d.length/2]+d[d.length/2-1]
        console.log(x/2)
    }else{
        let x=d[(d.length-1)/2]
        console.log(x)
    }
}
let m=[2,4,3,1,5]
let n=[8,6,7,9,1]
a(m,n)
//median of 2 arrays - IIFE function
((b,c)=>{
    let d=b.sort().concat(c.sort())
    if(d.length%2===0){
        let x=d[d.length/2]+d[d.length/2-1]
        console.log(x/2)
    }else{
        let x=d[(d.length-1)/2]
        console.log(x)
    }
})([2,4,3,1,5],[8,6,7,9,1])
