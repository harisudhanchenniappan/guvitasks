let a='20';
async function fetchImage(){
    let response=await fetch(`https://gutendex.com/books/`)
    let blocks=await response.json();
    let rows=document.querySelector('.row')
    let block=blocks.results
    //console.log(block)
    for(let data of block){
        console.log(`==>   ${data.title}`)
        let card=document.createElement('div')
        card.classList.add('card','col-lg-6','col-sm-12')

        let p=document.createElement('h3')
        p.classList.add('card-header')
        p.textContent=` ${data.title}`

        let p1=document.createElement('p')
        p1.classList.add('card-body')
        p1.textContent=`#author name:  ${data.authors[0].name}`
        let idd=data.id;
        let p2=document.createElement('p')
        p2.classList.add('card-body')
        p2.textContent=`#id:  ${idd}`

        
        let a=document.createElement('a')
        a.classList.add('aa')
        if(data.formats)
        a.setAttribute('href',`https://www.gutenberg.org/ebooks/${idd}.html.images`)
        a.textContent=`link`

        card.append(p,p1,p2,a)
        rows.append(card)
    }
}

fetchImage();
