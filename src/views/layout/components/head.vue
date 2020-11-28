<template>

</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>
