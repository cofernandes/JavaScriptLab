const log = (msg1, msg2) =>{
    console.log(msg1);
    console.log(msg2);
}

const log1 = () => {
    console.log("It's mee!!!!")
}

log("fast", "Furious");
setTimeout(log, 5000, "Hello", "Bye");
setTimeout(log1, 2500);

// my original function
const sum = (a, b) =>{
    return a+b;
}
const result = sum(2,5);
console.log(result);

const mult = (fcn, a, b, c) =>{
    const result1 = fcn(a,b);
    return result1 * c;
}

const result2 = mult(sum, 3,5, 2);
console.log(result2);

// function that modifies the original one

const mult2 = (fcn) =>{
    // returns a new function with modifed brhaviour
    return (a, b, c) =>{
        return result1 * c;
    };
};
// saving that modifies fucntion into a var
const mult3 = mult2(sum);

// calling the new modifed function
const finalresult = mult3(2,5,2);
console.log(finalresult);
