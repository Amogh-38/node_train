const {readFileSync, writeFileSync} = require('fs');// importing specific methods from the fs module
console.log('start')

const first = readFileSync('./contents/first.txt', 'utf8')
const second = readFileSync('./contents/subfolder/second.txt', 'utf8')

writeFileSync('./contents/result-sync.txt',`Here is the result: ${first}, ${second} `, { flag: 'a'})// here flag: 'a'
// seperated by a comma appends the new text to the existing text in result-sync

console.log('done with this task')
console.log('starting the next task')