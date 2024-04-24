const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const directoryPath = '.'; // Change this to your directory path

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(file => {
        if (path.extname(file) === '.tsx') {
            const baseName = path.basename(file, '.tsx');
            const subDirPath = path.join(directoryPath, baseName);
            const fullPath = path.join(directoryPath, file);
            const webPath = path.join(subDirPath, `${baseName}.web.tsx`);
            const nativePath = path.join(subDirPath, `${baseName}.native.tsx`);

            // Create a subdirectory with the same name as the base file name
            if (!fs.existsSync(subDirPath)) {
                fs.mkdirSync(subDirPath);
            }

            // Use git mv to rename the original file to .web.tsx inside the new subdirectory
            execSync(`git mv "${fullPath}" "${webPath}"`);

            // Copy the .web.tsx contents to .native.tsx
            fs.copyFile(webPath, nativePath, err => {
                if (err) {
                    console.error(`Failed to copy ${webPath} to ${nativePath}:`, err);
                } else {
                    console.log(`Successfully created ${nativePath}`);
                }
            });
        }
    });
});
