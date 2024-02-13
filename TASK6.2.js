class circle{
    constructor(radius=1.0,colour='red'){
        this.radius=radius;
        this.colour=colour;
    }
    /*constructor(){
        this.radius=0;
        this.colour='';
    }
    constructor(radius=1.0){
        this.radius=radius;
        this.colour=''
    }*/
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColour(){
        return this.colour;
    }
    setColour(colour){
        this.colour=colour;
    }
    getArea(){
        return this.radius*this.radius*3.14;
    }
    getCircumference(){
        return this.radius*this.radius;
    }
    toString(){
        return `Circle[radius=${this.radius},colour=${this.colour}]`
    }
}