const Bicycle = (function(){
    "use strict";
    let func1 = function createBicyclePrototype(){
        let speed = 0;
        return {
            speed: speed,
            applyBrake: (val) =>  { return speed = speed - val},
            speedup: function(val) { 
                return this.speed = this.speed + val;
            }

        }
    }

    let func2 = function createMountainBikePrototype(prototype){
        
        let ob = Object.create(prototype);
        ob.gear = 1;
        ob.setGear = function(gear) {
            return this.gear = gear;
        };
        
        return ob;
        
    }

    let start = function start(){
        
        let bicycleProtoype = func1();
        let mountainBikePrototype = func2(bicycleProtoype);
        let bicycle1 = Object.create(bicycleProtoype);
        bicycle1.speedup(3);
        let bicycle2 = Object.create(mountainBikePrototype);

        console.log("bicycle1.speed = " + bicycle1.speed);
        console.log("bicycle2.speed = " + bicycle2.speed);
        console.log("bicycle2.gear = " + bicycle2.gear);
        
    }

    return {
        start: start
    }
})();

window.onload = Bicycle.start;