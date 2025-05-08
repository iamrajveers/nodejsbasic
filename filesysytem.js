// const fs = require('fs');  // Import the 'fs' module
import fs from 'fs'
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);

});
