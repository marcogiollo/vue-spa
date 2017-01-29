<template>
  <transition name="section">
    <LytMain class="view">
      <div class="bg-wrap" :style="{backgroundImage: 'url('+styleObject+')'}">
        <p>This is View 01!</p>
        <router-link to="/view02">Go to View02</router-link>
      </div>
    </LytMain>
  </transition>
</template>

<script type="text/babel">
  export default {
    name: 'view01',
    components: {
      LytMain: require('../components/layout/main')
    },
    props: {
    },
    data() {
      return {
        styleObject: null
      };
    },
    computed: {
    },
    methods: {
      consoleP() {
        this.styleObject = require('./../assets/bg-img/02.jpg');
        console.log(this.styleObject);
      }
    },
    mounted() {
      this.consoleP();
    }
  };
</script>

<style>
  .view {
    text-align: center;
    transform: translateX(0%);
  }
  .bg-wrap {
    position: relative;
    width: 100%; 
    height: 100%;
    display: table;
    background-size: cover;
    background-position: 50%;
    text-align: center;
  }
  .section-enter-active, .section-leave-active, .section-enter {
    transition: all 1s ease-out;
  }
  .section-enter-to-class{
    transform: translateX(0%);
  }
  .section-enter{
    transform: translateX(100%);
  }
  .section-leave-to {
    transform: translateX(-100%);
  }
</style>
