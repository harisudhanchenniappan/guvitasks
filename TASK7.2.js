let XMLHttpRequest =require('xhr2');
let xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all')
xhr.send();
xhr.onload=()=>{
    let a=JSON.parse(xhr.responseText)
   
a.filter(b=>{
    if(b.population<200000)
    console.log(b.name.common);

})

}
