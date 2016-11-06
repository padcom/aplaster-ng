import axios from 'axios'

export function loadIpAddress() {
  return axios.get('/ip')
}

export function loadMessage() {
  return axios.get('/api/message')
}

export function listenForUpdates(onmessage) {
  function open() {
    return new global.WebSocket('ws:' + global.window.location.host + '/updates')
  }

  let channel = open()

  function reconnect() {
    const newChannel = open()
    newChannel.onclose = channel.onclose
    newChannel.onerror = channel.onerror
    newChannel.onopen = channel.onopen
    newChannel.onmessage = channel.onmessage
    global.updates = channel
  }

  channel.onmessage = onmessage

  channel.onopen = function(event) {
    console.log('Connected!')
  }

  channel.onclose = function(event) {
    console.log('Server disconnected - reconnecting...')
    setTimeout(reconnect, 5000)
  }

  return {
    close() {
      channel.close()
    }
  }
}
