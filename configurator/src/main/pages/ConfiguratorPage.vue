<template>
  <div id="app">
    <header><h1>Aplaster configurator</h1></header>
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
    return {
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
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

#app header {
  font-size: 32px;
  padding: 4px 10px 20px 10px;
}

#app #toolbar {
  padding: 4px 10px 20px 10px;
}

#app #workarea {
  display: flex;
  flex-direction: row;
  width: 100%;
}

#app #tree-view {
  padding-right: 20px;
}

#app #code-editor {
  flex-grow: 1;
  background-color: #ddd;
  margin-right: 20px;
  min-height: 100px;
}

#app #property-editor {
  padding-right: 20px;
}
</style>
