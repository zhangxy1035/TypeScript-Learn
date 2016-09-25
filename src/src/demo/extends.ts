/**
 * Created by cancer on 2016-09-25.
 */
 class Shape {

    area: number;
    public color: string;


    constructor (public  name: string , public width: number, public height: number ) {
        this.area = width * height;
        this.color = "pink";
    }

    shoutout() {
        return "I'm " + this.color + " " + this.name +  " with an area of " + this.area + " cm squared.";
    }
}
class Shape3D extends Shape {

    volume: number;

    constructor ( public name: string,public width: number,public height: number, public length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };

    shoutout() {
        return "I'm " + this.name +  " with a volume of " + this.volume + " cm cube.";
    }

    superShout() {
        return super.shoutout();
    }
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log( cube.superShout() );
