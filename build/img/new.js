const fs = require('fs');
  
// Function to get current filenames
// in directory

filenames = fs.readdirSync(__dirname);
console.log(filenames);
console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
  console.log(file);
});
  
// Function to get current filenames
// in directory with "withFileTypes"
// set to "true" 
  
// fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });
  
// console.log("\nCurrent directory files:");
// fileObjs.forEach(file => {
//   console.log(file);
// });