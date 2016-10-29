const Module = {
  props: {
    name: {
      title: 'Name',
      type: 'string'
    },
    host: {
      title: 'Host',
      type: 'string'
    },
    port: {
      title: 'Port',
      type: 'number',
      min: 1024,
      max: 65535
    }
  }
}

const RS232 = {
  props: {
    name: {
      title: 'Name',
      type: 'string'
    },
    baudrate: {
      title: 'Baudrate',
      type: 'number',
      min: 9600,
      max: 115200
    },
    bits: {
      title: 'Data bits',
      type: 'number',
      min: 7,
      max: 8
    },
    parity: {
      title: 'Parity',
      type: 'number',
      min: 0,
      max: 1
    },
    stop: {
      title: 'Stop bits',
      type: 'number',
      min: 1,
      max: 2
    }
  }
}

export const config = {
  modules: [ {
    type: Module,
    name: 'Module - kitchen',
    host: '127.0.0.1',
    port: 7777,
    components: [ {
      type: RS232,
      name: 'Serial1',
      baudrate: 19200,
      bits: 8,
      parity: 0,
      stop: 1
    } ]
  } ]
}
