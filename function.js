function log1(msg){
    console.log(msg);
}

const log2 = function(msg){
    console.log(msg);
}

const log3 = (msg) => {
    console.log(msg);
}

((msg) =>{
    console.log(msg);
})("Hello1");


(function(msg){
    console.log(msg);
})(Chris);

log1("hello2");
log2("hello3");
log3("hello4");