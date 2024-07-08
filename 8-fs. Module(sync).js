const { readFileSync, writeFileSync } = require('fs');

// Reading content from the first file
const first = readFileSync('./content/first.txt', 'utf8');

// Reading content from the second file
const second = readFileSync('./content/second.txt', 'utf8');

// Writing combined content to the result file
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`);
