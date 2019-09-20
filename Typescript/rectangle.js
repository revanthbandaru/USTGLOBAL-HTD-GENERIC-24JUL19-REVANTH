var MathOperations;
(function (MathOperations) {
    var Rectangle;
    (function (Rectangle) {
        function areaOfReactangle(length, breadth) {
            console.log('area f the rectangle ' + length * breadth);
        }
        Rectangle.areaOfReactangle = areaOfReactangle;
        function perimeter(length, breadth) {
            console.log('perimeter of the rectangle ' + 2 * (length * breadth));
        }
        Rectangle.perimeter = perimeter;
    })(Rectangle = MathOperations.Rectangle || (MathOperations.Rectangle = {}));
})(MathOperations || (MathOperations = {}));
