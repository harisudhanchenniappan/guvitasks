//return all prime numbers in an array - anonymous function
let a3=function(d){
    let b=0;
    let c=[];
    for(let x=1;x<d.length;x++){
        let b=0;
        for(let y=1;y<=d[x-1];y++){
        if(d[x-1]%y===0)
        b=b+1;
    }
        if(b<=2)
        c.push(d[x-1])
    }
    console.log(c.join(' '))
    }
    let b=[1,2,3,4,5,6,7,8,9]
    a3(b);
    //return all prime numbers in an array - anonymous function
    ((d)=>{
        let b=0;
        let c=[];
        for(let x=1;x<d.length;x++){
            let b=0;
            for(let y=1;y<=d[x-1];y++){
            if(d[x-1]%y===0)
            b=b+1;
        }
            if(b<=2)
            c.push(d[x-1])
        }
        console.log(c.join(' '))
        })([1,2,3,4,5,6,7,8,9])

//return all prime numbers in an array arrow function
        let a4=(d)=>{
            let b=0;
            let c=[];
            for(let x=1;x<d.length;x++){
                let b=0;
                for(let y=1;y<=d[x-1];y++){
                if(d[x-1]%y===0)
                b=b+1;
            }
                if(b<=2)
                c.push(d[x-1])
            }
            console.log(c.join(' '))
            }
            let b4=[1,2,3,4,5,6,7,8,9]
            a4(b);