const path = require('path')

console.log(path.sep)// platform specific seperator

const filePath = path.join('/git-reference', 'node-express-course', '11-auth-worlflow')//it joins the paths 
// provided with the directories joined by "\"
console.log(filePath)

const base = path.basename(filePath)// for the last directory or file provided in the filePath object
console.log(base)

const absolute = path.resolve(__dirname, 'git-reference', 'node-express-course', '11-auth-worlflow')// provides the
// absolute path 
console.log(absolute)