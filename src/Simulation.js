import { useCallback, useState } from "react";
import { Graphics , Stage, ParticleContainer, useTick, Container} from "@inlet/react-pixi";
import Boid from "./Boid";
import { render } from "@testing-library/react";

var population = 100;
var stageWidth = 1200; var StageHeight = 900;




function DrawBoid({boid})
{
    const draw = useCallback(
        (g) => {
            g.clear();
            g.beginFill(boid.color);
            g.drawCircle(boid.position.x, boid.position.y,5);
            console.log("Drawing Circle");
        },
        [],
    )
    return (
        <Graphics draw={draw}/>
    ); 
}

const Batch = () =>
{   
    
    var boids = [];
    var boidsUpdate = [];
     
    [boids[0],boidsUpdate[0] ] = useState(new Boid(Math.random()*stageWidth, Math.random()*StageHeight));
    console.log(boids[0]);
    useTick (delta => {
        var newBoid = boids[0].update();
        boidsUpdate[0](newBoid);
    })

    return(
        <DrawBoid boid={boids[0]}/>
    );

}

const Simulatiion = () => {
    return (        
     <Stage className="Stage" width={stageWidth} height={StageHeight} options={{backgroundColor: 0X404040}}>
         <Container>
             <Batch/>
        </Container>
     </Stage>
     );
}
 
export default Simulatiion;