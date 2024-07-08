/* const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

 */

const names = require('./names')// these are called as objects
const sayHi = require('./utils')
const data = require('./newname')
console.log(data)
  require('./addval')//if we have a function call inside the module that we are setting up for our 'require', then the function will be invoked even if we have not set the export values in the other module
sayHi('nice')
sayHi(names.jojo)
sayHi(names.fox)