const rewire = require("rewire")
const index = rewire("./index")
const foo = index.foo

console.log("typeof:", typeof foo)
console.log("instanceof Function:", foo instanceof Function)
