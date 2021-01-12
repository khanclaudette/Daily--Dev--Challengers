
function circleAreaPerimeter(radius) {
    return {
        radius,
        area() {
            return (Math.PI * radius * radius).toFixed(4);
        },
        perimeter() {
            return (2 * Math.PI * radius).toFixed(4)
        }
    };
};
const testCase = circleAreaPerimeter(5);
console.log('The area of this circle is ' + testCase.area() + 'sqaure units.');
console.log('the perimeter of this circle is ' + testCase.perimeter() + 'units.');

