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
      type: 'select',
      values: { '4800': 4800, '9600': 9600, '19200': 19200, '38400': 38400, '57600': 57600, '115200': 115200 }
    },
    bits: {
      title: 'Data bits',
      type: 'select',
      values: { '7': 7, '8': 8 }
    },
    parity: {
      title: 'Parity',
      type: 'select',
      values: { no: 0, yes: 1 }
    },
    stop: {
      title: 'Stop bits',
      type: 'select',
      values: { '1': 1, '2': 2 }
    }
  }
}

const Digital = {
  props: {
    name: {
      title: 'Name',
      type: 'string'
    },
    index: {
      title: 'Index',
      type: 'readonly'
    },
    direction: {
      title: 'Direction',
      type: 'select',
      values: { output: 0, input: 1 }
    }
  }
}

export const devices = {
  'module': Module,
  'serial': RS232,
  'digital': Digital
}

let config = {
  modules: [ {
    type: 'module',
    name: 'Module - kitchen',
    host: '127.0.0.1',
    port: 7777,
    components: [ {
      type: 'serial',
      name: 'Serial1',
      baudrate: 19200,
      bits: 8,
      parity: 0,
      stop: 1
    }, {
      type: 'digital',
      name: 'Output 1',
      index: 0,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 2',
      index: 1,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 3',
      index: 2,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 4',
      index: 3,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 5',
      index: 4,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 6',
      index: 5,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 7',
      index: 6,
      direction: 0
    }, {
      type: 'digital',
      name: 'Output 8',
      index: 7,
      direction: 0
    } ]
  } ]
}

export function save() {
  if (typeof Storage !== 'undefined') {
    global.localStorage.setItem('config', JSON.stringify(config))
  } else {
    console.error('Local storage not available')
  }
}

export function load() {
  if (typeof Storage !== 'undefined') {
    config = JSON.parse(global.localStorage.getItem('config')) || config
  } else {
    console.error('Local storage not available')
  }
  return config
}
