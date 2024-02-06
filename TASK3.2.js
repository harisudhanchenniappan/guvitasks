let XMLHttpRequest = require('xhr2')
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.send();
xhr.onload =function(){
    let a= JSON.parse(xhr.responseText)
    for(let b of a)
    console.log(b.flag)
}