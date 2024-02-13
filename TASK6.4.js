class Uberprice{
    ppkm=15;
    constructor(){
        this.distance=0;
    }
    getPrice(){
        if(this.distance<=5)
        console.log(`base price:${150}`)
        else
        console.log(`total fare: ${150+(this.distance-5)*15}`)
    }
}
let trip1=new Uberprice();
trip1.distance=10;
trip1.getPrice();