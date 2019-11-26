<template>
  <div>
    <button @click="childMethod()">点击我是子</button>
  </div>
</template>
<script>
  export default {
    methods: {
      childMethod() {
        this.$emit('fatherMethod');
      }
    }
  };
</script>