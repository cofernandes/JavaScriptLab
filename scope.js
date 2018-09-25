let a = "old a";
const c = "old c";


console.log("this is the if-statement");
if(true){
    let a = "new a";
    var b = "b";
    const c = "c";
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(a);
    console.log(c);
}

console.log("outside");
console.log(a);
console.log(b);
console.log(c);

function doSomething(){
    const c = "function c";
    var d = "new d";

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    
}

console.log("This is the function");
doSomething();