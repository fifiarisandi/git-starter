(function(){
    let cube = new Cube();

    cube.draw();

    cube.rotate();
    
})();


class Cube{
    constructor(){

    }

    draw = () => {
        console.log("Drawing 3d cube on canvas");
    }

    rotate = () => {
        console.log("Rotating cube continuously");
    }
}
