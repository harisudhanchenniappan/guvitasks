let div=document.querySelector('.content')
let p=document.createElement('p')
function number10(callback){
    setTimeout(()=>{
        p.textContent='10'
        div.append(p)
        callback();
    },1000)
}
function number9(callback){
    setTimeout(()=>{
        p.textContent='9'
        div.append(p)
        callback();
    },1000)
}
function number8(callback){
    setTimeout(()=>{
        p.textContent='8'
        div.append(p)
        callback();
    },1000)
}
function number7(callback){
    setTimeout(()=>{
        p.textContent='7'
        div.append(p)
        callback();
    },1000)
}
function number6(callback){
    setTimeout(()=>{
        p.textContent='6'
        div.append(p)
        callback();
    },1000)
}
function number5(callback){
    setTimeout(()=>{
        p.textContent='5'
        div.append(p)
        callback();
    },1000)
}
function number4(callback){
    setTimeout(()=>{
        p.textContent='4'
        div.append(p)
        callback();
    },1000)
}
function number3(callback){
    setTimeout(()=>{
        p.textContent='3'
        div.append(p)
        callback();
    },1000)
}
function number2(callback){
    setTimeout(()=>{
        p.textContent='2'
        div.append(p)
        callback();
    },1000)
}
function number1(callback){
    setTimeout(()=>{
        p.textContent='1'
        div.append(p)
        callback();
    },1000)
}
function message(){
    setTimeout(()=>{
        p.textContent='happy independence day!!!'
        div.append(p)
        
    },1000)
}


number10(function(){
    number9(function(){
        number8(function(){
            number7(function(){
                number6(function(){
                    number5(function(){
                        number4(function(){
                            number3(function(){
                                number2(function(){
                                    number1(function(){
                                        message();
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})