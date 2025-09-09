#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const{ execSync } = require('child_process');

const [, , cmd, propX, propY] = process.argv

if (cmd === 'init') {
  execSync('git clone https://github.com/kdavidenko/symbols-grid-component.git', {
    stdio: [0, 1, 2], 
    cwd: path.resolve(__dirname, ''), 
  })
  process.exit(0);
} else if (cmd === 'create') {
    console.log('hi')
    process.exit(0);

} else {
  console.error(`Usage: create <x> <y>`);
  process.exit(1);
}




// const path = require('path');
// const source = path.join(__dirname, '../src/GridSelection/GridSelection.js');
// const destDir = path.join(process.cwd(), '../src/components', 'GridSelection');
// const dest = path.join(destDir, 'GridSelection.js');


// const content = fs.readFileSync(source, 'utf8');
// const constName = 'GridSelection';
// const regex = new RegExp(`export const ${constName} = .*;`, 'g');

// if (!regex.test(content)) {
//     console.error(`Error: Exported const "${constName}" not found in ${source}`);
//     process.exit(1);
// } else {
//     console.log('found it!');
//     process.exit(1);
// }


// const [, , cmd, propX, propY] = process.argv
// if (cmd === 'create') {

// if (propX && propY) {
//     console.log(`Creating ${propX}x${propY} Grid Selection component...`);
// } else {
//     console.log(`Creating default Grid Selection component...`);
// }

// fs.mkdirSync(destDir, { recursive: true });


// fs.copyFile(source, dest, (err) => {
//   if (err) {
//     console.error('Error copying file:', err);
//   } else {
//     console.log('File copied successfully!');
//   }
// });

