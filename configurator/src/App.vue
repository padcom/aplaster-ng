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

<script>
import { devices, load as loadConfig, save as saveConfig } from './config'
import PropertyEditor from './components/PropertyEditor'
import ConfigTreeView from './components/ConfigTreeView'

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

<style>
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
 quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
