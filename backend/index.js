const express = require('express')
const app = express()
const wss = require('express-ws')(app).getWss();
Array.prototype.remove = require('./lib/remove-array-item')

// ----------------------------------------------------------------------------
// Live Updates
// ----------------------------------------------------------------------------

const updates = []

/**
 * Send message to all connected clients
 */
updates.send = data => {
  if (typeof data === 'object') data = JSON.stringify(data)
  updates.forEach(client => client.send(data))
}

app.ws('/updates', function(ws, req) {
  updates.push(ws)
  ws.on('close', () => updates.remove(ws))
  ws.send('{ "message": "Server says hi!" }')
});

// TEMPORARY - something to send updates through the socket 
const updatesTID = setInterval(function() {
  updates.send({ message: 'Hello, world!' })
}, 5000)

// ----------------------------------------------------------------------------
// Regular APIs
// ----------------------------------------------------------------------------

app.get('/api/message', function(req, res) {
  res.json({ message: 'Hello, world! '})
})

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------

const server = app.listen(3000, function() {
  console.log('Aplaster server ready.')
});

// ----------------------------------------------------------------------------
// NodeMon code to restart the server when changes are detected
// ----------------------------------------------------------------------------

process.on('SIGUSR2', (code) => {
  new Promise(resolve => wss.close(resolve))
    .then(() => console.log('Server closed.'))
    .then(() => process.kill(process.pid, 'SIGKILL'))
    .catch(e => { console.log('ERROR: ', e) })
});
