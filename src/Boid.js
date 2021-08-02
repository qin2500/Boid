import Vector from "./Vector";
class Boid
{
    constructor(x, y)
    {
        this.position = new Vector(x,y);
        this.velocity = new Vector(Math.random(),Math.random());
        this.accelaration = new Vector(0,0);
        this.color = 0xa3daff;
    }

    update()
    {
        //console.log(this.position);
        this.position.add(this.velocity);
        this.velocity.add(this.accelaration);
        return(this);
    }

}

export default Boid;