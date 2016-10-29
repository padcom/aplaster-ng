<template>
  <div class="config-tree-view">
    <ul class="modules">
      <li v-for="module in config.modules" class="module">
        <label @click="selectItem(module)" :class="{ selected: isItemSelected(module) }">{{module.name}}</label>
        <ul class="components">
          <li v-for="component in module.components" class="component">
            <label @click="selectItem(component)" :class="{ selected: isItemSelected(component) }">{{component.name}}</label>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'config-tree-view',
  props: {
    config: { type: Object },
    selected: { type: Object }
  },
  data() {
    return {
      selectedItem: this
    }
  },
  mounted() {
    this.selectedItem = this.selected
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item
      this.$emit('item-selected', item)
    },
    isItemSelected(item) {
      return this.selectedItem === item
    }
  }
}
</script>

<style scoped>
.config-tree-view {
  font-family: arial;
  user-select: none;
}
li label {
  cursor: pointer;
}
ul {
  list-item-style: disc;
  padding-left: 20px;
}
label:hover {
  text-decoration: underline;
}
label.selected {
  font-weight: bold;
}
</style>
