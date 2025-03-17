

function sum(a, b) {
    return a + b;
}

function sub (a, b){
    return a - b ;
}

function div(a, b,){
    if(b===0){
        throw new Error("div by zero not allowed")
    }
    return a/b;
}

module.exports = {
    sum,
    sub,
    div
}