<template>
  <div id="app">
    <property-editor
      :properties="data.type.props"
      :data="data"
    />
    <p style="margin-top: 20px">{{data.name}}, {{ data.host }}:{{data.port}}</p>
  </div>
</template>

<script>
import PropertyEditor from './components/PropertyEditor'

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

export default {
  name: 'app',
  components: {
    PropertyEditor
  },
  data() {
    return {
      data: {
        type: Module,
        name: 'Module - kitchen',
        host: '127.0.0.1',
        port: 7777
      }
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
