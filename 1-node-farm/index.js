const fs = require('fs');
const http = require('http');
const url = require('url');
/*
// ============================================================== //
File

// Blocking, synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

const textOut = `This is what we are know about the avocado: ${textIn}.
Created on ${Date.now()}`;

fs.writeFileSync('./txt/output.txt', textOut);

console.log('File written!');

console.log(`=======================================================`);
// Non-blocking, asynchronous way
fs.readFile('./txt/start.txt', 'utf-8', (error, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (error, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt', 'utf-8', (error, data3) => {
      console.log(data3);
      
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (e) => {
        console.log('Your file has been written!');
        });
        });
        });
        });
        
        console.log('Reading flie....');
        */

// ============================================================== //
// Server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  // res.end(
  //   `Hello from the server side! this is the ${pathName.slice(1).toUpperCase()}`
  // );

  if (pathName === '/' || pathName === '/products') {
    res.end(`Hello this is ${pathName.slice(1).toUpperCase()} page!`);
  } else if (pathName === '/overview') {
    res.end(`Hello this is ${pathName.slice(1).toUpperCase()} page!`);
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'content-Type': 'text/html',
    });
    res.end(`<h1>Page Not Found!<h1>`);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Start listening!');
});
