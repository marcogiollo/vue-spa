<template>
  <div class="layout-main">
    <div class="layout-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Layout',
    components: {
    },
    props: {
    },
    data() {
      return {
      };
    },
    computed: {
    },
    methods: {
    },
    watch: {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .layout-main {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .layout-content {
    position: absolute;
    height: 100%;
    width: 100%;
  }
</style>
