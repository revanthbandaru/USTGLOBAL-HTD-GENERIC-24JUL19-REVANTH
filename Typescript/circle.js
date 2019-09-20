var MathOperations;
(function (MathOperations) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function circumference(radius) {
            console.log('circumference of the circle ' + 2 * PI * radius);
        }
        Circle.circumference = circumference;
        function areaOfCircle(radius) {
            console.log('area of the circle ' + PI * radius * radius);
        }
        Circle.areaOfCircle = areaOfCircle;
    })(Circle = MathOperations.Circle || (MathOperations.Circle = {}));
})(MathOperations || (MathOperations = {}));
