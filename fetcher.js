const request = require("request");
const fs = require("fs");

const getInfo = function(arr, callback) {
  request(arr[0], (error, response, body) => {
    callback(body);
  });
}

const writingFile = function(bodyInfo) {
  fs.writeFile(input[1], bodyInfo, (error) => {
    if (error) {
      return console.log("There was an error!");
    } else {
      return console.log(`Downloaded and saved ${Buffer.byteLength(bodyInfo)} bytes to ${input[1]}`);
    }
});
}

const input = process.argv.slice(2);
getInfo(input, writingFile);
