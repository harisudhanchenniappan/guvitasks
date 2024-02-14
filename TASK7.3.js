let XMLHttpRequest =require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.send();
xhr.onload=()=>{
    let a=JSON.parse(xhr.responseText)
   a.forEach(b=>{
    console.log(b.name.common,b.capital,b.flag)
   })

}
