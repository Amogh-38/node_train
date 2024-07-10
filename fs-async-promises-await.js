const { readFile, writeFile } = require('fs').promises;

async function mergeFiles() {
    try {
        const first = await readFile('./contents/first.txt', 'utf8');
        const second = await readFile('./contents/subfolder/second.txt', 'utf8');
        await writeFile('./contents/result-async.txt', `Result: ${first} ${second}`, { flag: 'a' });
        console.log('Files have been merged successfully');
    } catch (err) {
        console.error(err);
    }
}

mergeFiles();
