
console.log("module wrapper function")

// console.log("exports", exports)
// console.log("require", require)
// console.log("module", module)
console.log("__filename", __filename)
console.log("__dirname", __dirname)

module.exprts.greet = function(name){
    console.log(` hello ${name}`)
}