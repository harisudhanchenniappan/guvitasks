//return all palindromes in an array - anonymous function
let a=function(b){
    let d=[];
    for(let x=0;x<b.length;x++){
        let c=b[x].split('').reverse().join('')
        if(c==b[x])
        d.push(c);
    }
    return d.join(' ')
}
let x=['wow','fdhzdf','mom','fhhr','dad']
console.log(a(x))
//return all palindromes in an array - IIFE function
((m)=>{
    let d=[];
    for(let x=0;x<m.length;x++){
        let c=m[x].split('').reverse().join('')
        if(c==m[x])
        d.push(c);
    }
    console.log(d.join(' '))
})(['wow','fdhzdf','mom','fhhr','dad'])
//return palindromes in an array - arrow function
let a1=(b)=>{
    let d=[];
    for(let x=0;x<b.length;x++){
        let c=b[x].split('').reverse().join('')
        if(c==b[x])
        d.push(c);
    }
    return d.join(' ')
}
let x1=['wow','fdhzdf','mom','fhhr','dad']
console.log(a1(x))
