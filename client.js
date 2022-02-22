const net = require('net')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: "50541",
  })  

  // interpret incoming data as text
  conn.setEncoding('utf8')
  conn.on('data', (data) => {
    console.log(data)
  })

  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: EJD')
    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 200) 
    // setTimeout(() => {
    //   conn.write('Move: left')
    // }, 400) 
    // setTimeout(() => {
    //   conn.write('Move: left')
    // }, 600) 
    // setTimeout(() => {
    //   conn.write('Move: down')
    // }, 800) 
  })



  return conn
}

module.exports = connect