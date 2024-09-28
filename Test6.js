class Sample
{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    displayInfo() {
        console.log(this.id+" "+this.name);
    }      
}
let s=new Sample(5,"Kavya");
s.displayInfo();