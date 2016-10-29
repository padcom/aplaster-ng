<template>
  <div id="app">
    <config-tree-view :config="config" :selected="currentItem" @item-selected="selectConfigElement($event)" />
    <p style="margin: 20px 0">{{currentItem.name}}</p>
    <property-editor :properties="currentItem.type.props" :data="currentItem" />
  </div>
</template>

<script>
import { config } from './config'
import PropertyEditor from './components/PropertyEditor'
import ConfigTreeView from './components/ConfigTreeView'

export default {
  name: 'app',
  components: {
    PropertyEditor,
    ConfigTreeView
  },
  data() {
    return {
      config,
      currentItem: config.modules[0]
    }
  },
  methods: {
    selectConfigElement(e) {
      this.currentItem = e
    }
  }
}
</script>

<style>
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
  font-family: 'sans-serif';
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
