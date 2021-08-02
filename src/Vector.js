class Vector
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    add(other)
    {
        this.x += other.x;
        this.y += other.y;
    }
    subtract(other)
    {
        this.x -= other.x;
        this.y-= other.y;
    }

}

export default Vector;