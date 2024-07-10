const _ = require('lodash') // "_" here denotes that we are importing everything from lodash

const items = [1, [2, [3, [4]]]]
const super_items = _.flattenDeep(items)// flattenDeep recursively flattens a nested array
console.log(super_items)
console.log("Hello World")