// // let count = 0;
// // const isMultipleOfSeven = (value) => {
// //   return value % 7 === 0;
// // };
// // for (let i = 7; i <= 7777777; i++) {
// //   if (isMultipleOfSeven(i)) {
// //     i.toString()
// //       .split("")
// //       .map((letter) => {
// //         if (letter === "7") {
// //           count++;
// //         }
// //       });
// //   }
// // }

// // console.log(count);

// const fs = require("fs");
// const path = require("path");
// let count = 0;

// // Function to recursively traverse directories
// function traverseDirectory(directory, fileCallback) {
//   fs.readdirSync(directory).forEach((file) => {
//     const fullPath = path.join(directory, file);
//     if (fs.statSync(fullPath).isDirectory()) {
//       traverseDirectory(fullPath, fileCallback);
//     } else {
//       fileCallback(fullPath);
//     }
//   });
// }

// let types = [];

// // Function to copy .m4a files
// function copyM4aFiles(filePath, destinationDir) {
//   // if (path.extname(filePath) === ".m4a" ||path.extname(filePath) === ".mp3" |path.extname(filePath) === ".m4p"|path.extname(filePath) === ".wav") {
//   //   const fileName = path.basename(filePath);
//   //   const destinationPath = path.join(destinationDir, fileName);
//   //   fs.copyFileSync(filePath, destinationPath);
//   //   console.log(`Copied ${filePath} to ${destinationPath}`);
//   // }
//   if (
//     // path.extname(filePath) === ".m4a" ||
//     // (path.extname(filePath) === ".mp3") |
//     //   (path.extname(filePath) === ".m4p") |
//       (path.extname(filePath) === ".mp3")
//   ) {
//     const fileName = path.basename(filePath);
//     const destinationPath = path.join(destinationDir, fileName);
//     fs.copyFileSync(filePath, destinationPath);
//     console.log(`Copied ${filePath} to ${destinationPath}`);
//   }

//   if (!types.includes(path.extname(filePath))) {
//     types.push(path.extname(filePath));
//   }
// }

// // Specify the root directory to start traversing
// const rootDirectory = "/Users/danielumejiego/Desktop/here_we_ar3";

// // Specify the destination directory where you want to copy the files
// const destinationDirectory = "/Users/danielumejiego/Desktop/to_here";

// // Ensure the destination directory exists, if not create it
// if (!fs.existsSync(destinationDirectory)) {
//   fs.mkdirSync(destinationDirectory);
// }

// // Start traversing the root directory
// traverseDirectory(rootDirectory, (filePath) => {
//   copyM4aFiles(filePath, destinationDirectory);
// });

// console.log(count)
// console.log(types);



