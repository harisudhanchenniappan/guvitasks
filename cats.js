let a='20';
async function fetchImage(){
    let response=await fetch(`https://meowfacts.herokuapp.com/?count=${a}`)
    let blocks=await response.json();
    let rows=document.querySelector('.row')
    let block=blocks.data
    //console.log(block)
    for(let data of block){
        console.log(`==>   ${data}`)
        let card=document.createElement('div')
        card.classList.add('card','col-lg-4','col-sm-12')

        let p=document.createElement('p')
        p.textContent=`==>  ${data}`

        card.append(p)
        rows.append(card)
    }
}

fetchImage();
