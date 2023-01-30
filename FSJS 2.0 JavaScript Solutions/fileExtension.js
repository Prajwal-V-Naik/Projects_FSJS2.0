const fileExtension = (filename) => {
    const dotExtension = filename.split(".")
    // console.log(dotExtension);
    return dotExtension[dotExtension.length - 1];
    // console.log(dotPart)
};

let file = "Test.js"
// fileExtension(f);
console.log("File name is = " + file);
console.log("File Extension is = " + fileExtension(file));

// Output be like:
// File name is = Test.js
// File Extension is = js