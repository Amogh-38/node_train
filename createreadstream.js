const {createReadStream} = require('fs')

const stream = createReadStream('./contents/big.txt', {highWaterMark : 90000})// we can change the size of the buffer by the highWaterMark method
//{encoding : 'utf8'} is how we provide encoding as well to out file that we are streaming

stream.on('data', (result) =>{
  console.log(result)
})
stream.on('error', (err) => console.log(err))