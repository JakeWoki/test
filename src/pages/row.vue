<template>
  <view
  >
    Row {{ index }} : {{ data[index] }}
  </view>
</template>

<script>
  export default {
    props: ['index', 'data', 'css']
  }
</script>
