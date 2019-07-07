const Bicycle = (function(){
    "use strict";
    let bicycleProto = (function createBicyclePrototype(){
        let speed = 0;
        return {
            speed: speed,
            applyBrake: function (val) { return this.speed = this.speed - val},
            speedup: function(val) { return this.speed = this.speed + val; }

        }
    })();

    let mountainBikeProto = function createMountainBikePrototype(prototype){
        
        let ob = Object.create(prototype);
        ob.gear = 1;
        ob.setGear = function(gear) {
            return this.gear = gear;
        };
        
        return ob;
        
    };

    let start = function start(){
       
        let bicycle1 = Object.create(bicycleProto);
        let mBike1 = Object.create(mountainBikeProto(bicycleProto));
        let mBike2 = Object.create(mountainBikeProto(bicycleProto));

        bicycle1.speedup(1);
        mBike2.speedup(1);
        mBike2.speedup(1);
        mBike1.setGear(3);
        console.log("Bicycle1's speed = " + bicycle1.speed);
        console.log("Mountain Bike1's speed = " + mBike1.speed);
        console.log("Mountain Bike2's speed = " + mBike2.speed);
        
        console.log("Mountain Bike1's current gear = " + mBike1.gear);
        console.log("Mountain Bike2's current gear = " + mBike2.gear);
        mBike2.applyBrake(1);
        console.log("Bicycle1's speed = " + bicycle1.speed);
        console.log("Mountain Bike1's speed = " + mBike1.speed);
        console.log("Mountain Bike2's speed = " + mBike2.speed);

        
    }

    return {
        start: start
    }
})();

window.onload = Bicycle.start;