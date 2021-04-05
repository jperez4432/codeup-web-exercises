(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            var areaCalc = Math.PI * Math.pow(this.radius, 2);
            this.area = areaCalc;
//            return Math.PI * (3**3)
            return areaCalc;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            console.log("The calculated area is " + this.area);
            var circleArea = this.getArea();
            if(doRounding) {
                circleArea = Math.round(circleArea);
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circleArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
