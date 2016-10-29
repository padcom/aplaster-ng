import mqtt from 'mqtt';

chrome.app.runtime.onLaunched.addListener(function() {
  var client = mqtt.connect('mqtt://localhost')

  client.on('connect', function () {
    client.subscribe('presence')
    client.publish('presence', 'Hello mqtt')
  })

  client.on('message', function (topic, message) {
    // message is Buffer 
    console.log(message.toString())
    client.end()
  });

  chrome.app.window.create('index.html', {
    'outerBounds': {
      'width': 800,
      'height': 560
    }
  });
});
