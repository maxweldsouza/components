const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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
        // Recursively process each subdirectory
        processDirectory(fullPath);
      } else {
        // Check for .native.tsx and .web.tsx files
        if (dirent.name.endsWith('.native.tsx')) {
          renameFile(fullPath, dir, 'index.native.tsx');
        } else if (dirent.name.endsWith('.web.tsx')) {
          renameFile(fullPath, dir, 'index.web.tsx');
        }
      }
    });
  });
}

function renameFile(originalPath, dir, newName) {
  const newPath = path.join(dir, newName);
  try {
    // Execute git mv to rename the file
    execSync(`git mv "${originalPath}" "${newPath}"`);
    console.log(`Renamed ${originalPath} to ${newPath}`);
  } catch (error) {
    console.error(`Failed to rename ${originalPath} to ${newPath}: ${error}`);
  }
}

processDirectory(directoryPath);
