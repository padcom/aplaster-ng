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

const Digital = {
  props: {
    name: {
      title: 'Digital input/output',
      type: 'string'
    },
    index: {
      title: 'Index',
      type: 'number',
      readonly: true
    },
    direction: {
      title: 'Direction',
      type: 'number',
      min: 0,
      max: 0
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
    }, {
      type: Digital,
      name: 'Output 1',
      index: 0,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 2',
      index: 1,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 3',
      index: 2,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 4',
      index: 3,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 5',
      index: 4,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 6',
      index: 5,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 7',
      index: 6,
      direction: 0
    }, {
      type: Digital,
      name: 'Output 8',
      index: 7,
      direction: 0
    } ]
  } ]
}
