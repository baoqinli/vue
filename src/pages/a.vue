<template>
  <div>
	  我是父
    <child @fatherMethod="fatherMethod"></child>
  </div>
</template>
<script>
  import child from './b';
  export default {
    components: {
      child
    },
    methods: {
      fatherMethod() {
        alert("发生点击")
      }
    }
  };
</script>