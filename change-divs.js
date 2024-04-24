const fs = require('fs');
const path = require('path');

const directoryPath = './'; // Update this path

function processDirectory(dir) {
  fs.readdir(dir, { withFileTypes: true }, (err, dirents) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    dirents.forEach(dirent => {
      const fullPath = path.join(dir, dirent.name);
      if (dirent.isDirectory()) {
        processDirectory(fullPath); // Recursively process subdirectories
      } else if (dirent.name.endsWith('.native.tsx')) {
        modifyFile(fullPath);
      }
    });
  });
}

function modifyFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    // Replace styled.div with styled.View
    const modifiedData = data.replace(/styled\.div/g, 'styled.View');

    fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Modified file: ${filePath}`);
      }
    });
  });
}

processDirectory(directoryPath);
