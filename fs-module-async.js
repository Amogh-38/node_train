const {readFile, writeFile, read} = require('fs');
console.log('start')
readFile('./contents/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./contents/subfolder/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./contents/result-async.txt', `Result: ${first} ${second}`, {flag : 'a'}, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task')
            console.log(result);
        });
    });
});
console.log('starting next task')
/* in the async approach, the task gets offloaded right after starting the task
so right after start, o/p will be 'starting next task' */