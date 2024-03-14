function fetchDog(){
    fetch('https://dog.ceo/api/breed/hound/images')
    .then(response=>response.json())
    
    .then(events=>{
        let bod=document.getElementById('page')
        let imageUrl=events.message
        console.log(imageUrl.length)
        imageUrl.forEach(url=>{
            const image=document.createElement('img')
            //console.log(url)
            image.setAttribute('src',url)
            image.classList.add('image')
            bod.append(image)
            document.body.append(bod)
        })
        console.log(events.status)
    })
}
fetchDog();