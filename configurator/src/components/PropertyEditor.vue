<template>
  <div style="height: 200px">
    <table class="property-editor">
      <thead>
        <tr>
          <th>{{ i18n.title }}</th>
          <th>{{ i18n.value }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(property, key) in properties">
          <td class="title">{{ property.title }}</td>
          <td class="value" v-if="property.type === 'string'"><input type="text" v-model="data[key]"/></td>
          <td class="value" v-if="property.type === 'number'"><input type="number" :min="property.min" :max="property.max" v-model="data[key]" /></td>
          <td class="value" v-if="property.type === 'select'">
            <select v-model="data[key]">
              <option v-for="(key, value) in property.values" :value="key">{{value}}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'property-editor',
  props: {
    properties: { type: Object },
    data: { type: Object },
    i18n: {
      type: Object,
      default: function() {
        return {
          title: 'Property',
          value: 'Value'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
table.property-editor {
  th {
    font-weight: 400;
    background-color: gray;
    color: #eee;
    padding: 3px;
  }
  td {
    margin: 2px;
    border: solid 1px #ddd;
  }
  td.title {
    width: 150px;
  }
  td.value {
    width: 150px;

    input, select {
      width: 100%;
      border: none;
    }
    input:focus {
      outline: none;
    }
  }
}
</style>
