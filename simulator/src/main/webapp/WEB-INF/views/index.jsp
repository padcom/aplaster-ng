<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Aplaster Module Simulator</title>
</head>
<body>
  <div id="app">
    <module :m="m"></module>
  </div>

  <script src="https://unpkg.com/vue/dist/vue.js"></script>

  <script>
    Vue.filter('onoff', function(value) {
      return value ? 'ON' : 'OFF';
    });
  </script>

  <template id="module">
    <div>
      <h2>Module</h2>
      <component v-for="device in m.devices" :is="device.type" :device="device"></component>
    </div>
  </template>
  <script>
    Vue.component('module', {
      template: '#module',
      props: { m: { required: true } }
    });
  </script>

  <template id="serial-port">
    <div>
      <p><b>RS232</b>: {{device.name}}</p>
      <p>
        <input ref="input" type="text"></input>
        <button @click="send">Send</button>
      </p>
    </div>
  </template>
  <script>
    Vue.component('serial-port', {
      template: '#serial-port',
      props: { device: { required: true} },
      methods: {
        send: function() {
          console.log(this.device.name + ' is sending "' + this.$refs.input.value + '"');
          this.$refs.input.value = '';
        }
      }
    });
  </script>

  <template id="digital">
    <p><button @click="toggle">{{device.name}} {{ state | onoff }}</button></p>
  </template>
  <script>
    Vue.component('digital', {
      template: '#digital',
      props: { device: { required: true} },
      data() {
        return {
          state: false
        }
      },
      methods: {
        toggle() {
          this.state = !this.state;
        }
      }
    });
  </script>

  <script>
    app = new Vue({
      el: '#app',
      data: {
        title: 'Aplaster module simulator',
        m: {
          devices: [
            { name: 'Serial', type: 'serial-port' },
            { name: 'Digital1', type: 'digital' }
          ]
        }
      }
    });
  </script>
</body>
</html>
