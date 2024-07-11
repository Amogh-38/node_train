const {readFile, writeFile} = require('fs').promises
/* const util = require('util') 

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile) */


const start = async () => {
  try {
    const first = await readFile('./contents/first.txt', 'utf8')
    const second = await readFile('./contents/second.txt', 'utf8')
    await writeFile('./contents/write-file-promise.txt', `This Is The Result: ${first} ${second}`, {flag : 'a'})
    console.log(first, second)
  } catch (error) {
    console.ERROR(error)
  }
}
start()

/* const getText = (path) => { // getText is called as a wrapper function
  return new Promise ((resolve, reject) => { this is us creating a prommise the longer way
    readFile (path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(data)
      }
    })
  })
} */
/* getText('./contents/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err)) */