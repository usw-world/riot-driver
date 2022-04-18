const http = require("http");
const fs = require("fs");

const options = {
    hostname: "10.30.5.129",
    port: 2011,
    path: "/drivein",
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
}

let buffer;
let req = http.request(options, (res) => {
    console.log("status code : ", res.statusCode);
    console.log("headers : ", res.headers);
    res.on('data', (chunk) => {
        if(!buffer) buffer = [];
        buffer.push(chunk);
    })
    res.on('end', () => {
        let imageBuffer = Buffer.concat(buffer);
        console.log("Buffer :: ", imageBuffer);
        fs.writeFile('capture.jpg', imageBuffer, (err) => {
            if(err) console.error(err);
        })
    })
});

req.on('error', (err) => {
    console.error("I got some error : ", err);
})

req.write('{"usw" : "I got you!"}');
req.end();