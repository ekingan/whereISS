const url = "https://api.wheretheiss.at/v1/satellites/25544";
let data = '';
// Create a readable stream
var readerStream = createReadStream(url);

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   console.log("data: ", data, "chunk: ", chunk);
});

readerStream.on('end',function(){
   console.log(data);
});



readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

export default server;