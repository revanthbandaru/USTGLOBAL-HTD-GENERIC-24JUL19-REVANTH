namespace MathOperations{
  export  namespace Circle{
    const PI = 3.14;
 export function circumference(radius:number){
    console.log('circumference of the circle '+2*PI*radius);
}
export function areaOfCircle(radius:number){
    console.log('area of the circle '+ PI*radius*radius);
}
}
}