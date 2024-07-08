const { readFile, writeFile } = require('fs');

// Reading the content of the file asynchronously
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    
    // Writing the result to a new file asynchronously
    const content = `Here is the result: ${result}`;
    writeFile('./content/result-async.txt', content, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('File has been written');
    });
});
