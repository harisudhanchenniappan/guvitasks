class Movie{
    constructor(x,y,z='PG'){
        this.name=x;
        this.studio=y;
        this.rating=z;
    }
    getPG(a,rating){
        let newList=[];
        a.forEach(m=>{
            if(m.rating==rating)
            newList.push(m);
        })
        return newList;
    }
}
let movieList = [];
let movie1=new Movie('vikram','rkfi','R');
movieList.push(movie1,new Movie('jawan','lyca','PG'),new Movie('jailer','7screen','PG'),new Movie('LEO','lyca'))
console.log(movie1.getPG(movieList,'PG'))