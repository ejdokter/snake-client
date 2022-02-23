// running the game
const connect = require('./client');
const setupInput = require('./input');

// log connecting to the client
console.log('Connecting...');


setupInput(connect());