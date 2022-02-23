// setup interface to handle user input from stdin
const { input } = require('./constants');

let connection;

// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', handleUserInput);
  return stdin;
};

// processes the user input
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit(); // will exit with ctrl^c
  }
  connection.write(input[key]); // takes input and checks it against object in constants.js
  
  // old implementation before I created the object
  
  // if (key === 'w') {
  //   connection.write('Move: up')
  // }
  // if (key === 'a') {
  //   connection.write('Move: left')
  // }
  // if (key === 's') {
  //   connection.write('Move: down')
  // }
  // if (key === 'd') {
  //   connection.write('Move: right')
  // }
  // if (key === 'x') {
  //   connection.write('Say: nice!')
  // }
  // if (key === 'z') {
  //   connection.write('Say: good game')
  // }
};

module.exports = setupInput;
