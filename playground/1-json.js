const fs = require('fs');
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// };


// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

const bufferedData = fs.readFileSync('1-json.json');
let parsedData = JSON.parse(bufferedData);

parsedData.name = 'Bob';
parsedData.age = 35;

fs.writeFileSync('1-json.json', JSON.stringify(parsedData));
