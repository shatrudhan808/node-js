// modeule.export
// require

const firstModule = require('./first-module.js')

console.log(firstModule.sum(4,7))
console.log(firstModule.sub(7,3))
console.log(firstModule.div(8,7))

try {
    console.log("try to divide by zero");
    let res = firstModule.div(4,0)
    console.log(res)
} catch (error) {
    console.log("error", error.message)
}
// module wrapper function
 (
function(exports, require, module, __filename, __dirname){
    // module code goes here
}
)