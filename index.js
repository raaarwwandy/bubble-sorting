/* jshint esversion:6*/

const PORT = process.env.PORT || 3000; 
const server = require('./server');

server.listen(PORT, _=>{
  console.log('the server is listening on', PORT);
});