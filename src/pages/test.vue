<template>
  <virtual-list
    :height="500"
    :item-data="list"
    :item-count="list.length"
    :item-size="100"
    :item="Row"
    width="100%"
  />
</template>

<script>
  import Row from './row.vue'

  function buildData (offset = 0) {
    return Array(100).fill(0).map((_, i) => i + offset)
  }

  export default {
    data() {
      return {
        Row,
        list: buildData(0)
      }
    },
  }
</script>

<style>

</style>
