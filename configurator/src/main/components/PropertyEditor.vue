<template>
  <div class="property-editor" style="height: 200px">
    <table>
      <thead>
        <tr>
          <th>{{ i18n.title }}</th>
          <th>{{ i18n.value }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(property, key) in properties">
          <td class="title">{{ property.title }}</td>
          <td class="value" v-if="property.type === 'readonly'"><input type="text" readonly v-model="data[key]"/></td>
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
* {
  font-size: 13px;
  font-family: arial;
}
table {
  th {
    font-weight: 400;
    background-color: gray;
    color: #eee;
    padding: 3px;
    user-select: none;
    cursor: default;
  }
  td {
    padding: 01px 2px;
    margin: 0;
    border: solid 1px #ddd;
    height: 24px;
    align: center;
    vertical-align: middle;
  }
  td.title {
    width: 150px;
    user-select: none;
    cursor: default;
  }
  td.value {
    width: 150px;

    input, select {
      width: 100%;
      border: none;
      padding: 3px;
      background-color: white;
    }

    select, option {
      padding: 2px 0px;
    }

    input:focus, select:focus {
      outline: dotted 1px gray;
    }
  }
}
</style>
