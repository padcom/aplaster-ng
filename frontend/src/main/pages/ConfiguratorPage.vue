<template>
  <div id="app">
    <header>
      <h1>Aplaster configurator {{ ip | inParents }}</h1>
      <h3>{{ message }}</h3>
    </header>
    <div id="toolbar">
      <button @click="saveConfig()">Save</button>
    </div>
    <div id="workarea">
      <config-tree-view id="tree-view" :config="config" :selected="currentItem" @item-selected="selectConfigElement($event)" />
      <div id="code-editor">Code editor</div>
      <property-editor id="property-editor" :properties="devices[currentItem.type].props" :data="currentItem" />
    </div>
  </div>
</template>

<script>
import { devices, load as loadConfig, save as saveConfig } from '../config'
import * as API from '../api'

import PropertyEditor from 'components/PropertyEditor'
import ConfigTreeView from 'components/ConfigTreeView'

export default {
  name: 'aplaster-config-editor',
  components: {
    PropertyEditor,
    ConfigTreeView
  },
  data() {
    const config = loadConfig()
    API.loadIpAddress()
      .then(response => { this.ip = response.data.ip })
    API.loadMessage()
      .then(response => { this.message = response.data.message })

    return {
      ip: '',
      message: '',
      config,
      devices,
      currentItem: config.modules[0]
    }
  },
  methods: {
    selectConfigElement(e) {
      this.currentItem = e
    },
    saveConfig
  },
  filters: {
    inParents(value) {
      return '(' + value + ')'
    }
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

header h1 {
  font-size: 32px;
  padding: 4px 10px 20px 10px;
}

#toolbar {
  padding: 4px 10px 20px 10px;
}

#workarea {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#tree-view {
  padding-right: 20px;
}

#code-editor {
  flex-grow: 1;
  background-color: #ddd;
  margin-right: 20px;
  min-height: 100px;
}

#property-editor {
  padding-right: 20px;
}
</style>
