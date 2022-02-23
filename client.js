const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });

  // message saying connection was successful and name given
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: EJD');
  });
  return conn;
};

module.exports = connect;