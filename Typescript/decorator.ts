function printConstructor(cons:Function){
    console.log(cons);
}

@printConstructor
class Sample{
constructor(){
    console.log("hi im the sample of the constructor");
}
}
