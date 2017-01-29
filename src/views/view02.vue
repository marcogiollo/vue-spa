<template>
  <transition name="section">
    <LytMain class="view">
      <router-link to="/">Go to Index</router-link>
      <SliderImg v-for="gallery in galleries" :gallery="gallery"></SliderImg>
    </LytMain>
  </transition>
</template>

<script type="text/babel">
  export default {
    name: 'view02',
    components: {
      LytMain: require('../components/layout/main'),
      SliderImg: require('../components/slider/slideimg')
    },
    props: {
    },
    data() {
      return {
        galleries:
        [{'arrayImgs': [{'path': '01'},
        {'path': '02'},
        {'path': '04'}]},
        {'arrayImgs': [{'path': '01'},
        {'path': '02'},
        {'path': '03'},
        {'path': '04'}]},
        {'arrayImgs': [{'path': '01'},
        {'path': '02'},
        {'path': '03'},
        {'path': '04'}]}]
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

<style>
  .view {
    position: absolute;
    text-align: center;
    transform: translateX(0%);
    overflow: hidden;
    overflow-y: scroll;
    height: 100%;
  }
  .section-enter-active, .section-leave-active, .section-enter {
    transition: all 1s ease-out;
  }
  .section-enter-to-class{
    transform: translateX(0%);
  }
  .section-enter{
    transform: translateX(100%)
  }
  .section-leave-to {
    transform: translateX(-100%);
  }
</style>
