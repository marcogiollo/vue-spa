<template>
  <transition name="section" v-on:after-enter="afterEnter" >
    <LytMain class="index">
      <div class="bg-wrap" :style="{backgroundImage: 'url('+styleObject+')'}">
        <div class="grid-wrapper">
            <div class="v-aligner">
              <div v-for="cell in cells" class="cell-grid" >
                  <p>{{cell.name}}</p>
              </div>
            </div>
        </div>
        <button>
            <router-link to="/view01">Go to View01</router-link>
        </button>
      </div>
    </LytMain>
  </transition>
</template>

<script type="text/babel">
  import {TweenMax} from 'gsap';
  import {getDocumentHeight} from './../utils';
  export default {
    name: 'index',
    components: {
      LytMain: require('../components/layout/main')
    },
    props: ['works'],
    data() {
      return {
        styleObject: null,
        cells: [{'name': 'name 01'},
          {'name': 'name 02'},
          {'name': 'name 03'},
          {'name': 'name 04'}]
      };
    },
    computed: {
    },
    methods: {
      consoleP() {
        this.styleObject = require('./../assets/bg-img/01.jpg');
        console.log(this.styleObject);
      },
      init() {
        // TweenMax.to(this.$el, 1.75,
        //   {force3D: true, y: 0, scaleY: 1, ease: 'Expo.easeOut'});
      },
      afterEnter(el) {
        console.log(getDocumentHeight());
        let htmlCollection = document.getElementsByClassName('cell-grid');
        let i = 0;
        [].forEach.call(htmlCollection, function(htmlElement) {
          console.log(htmlElement);
          TweenMax.to(htmlElement, 1.75,
            {delay: 0.5 * i,
              opacity: 1,
              force3D: true,
              rotateY: '0deg',
              scaleX: 1,
              scaleY: 1,
              ease: 'Expo.easeOut'});
          i++;
        });
      }
    },
    mounted() {
      this.consoleP();
      this.init();
    }
  };
</script>

<style>
  .index {
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
  button {
    position: absolute;
    bottom: 50px;
    height: 20px;
    width: 100px;
    left: 50%;
    margin-left: -50px;
    background-color: #ebebeb;
    text-decoration: none;
  }
  button a {
    text-decoration: none;
    color: inherit !important;
  }
  .grid-wrapper {
    position: relative;
    height: 100%;
    width: 70%;
    margin: 0 auto;
    display: table;
  }
  .v-aligner {
    display: table-cell;
    width: 100%;
    vertical-align: middle;
  }
  .grid-wrapper .cell-grid{
    position: relative;
    float: left;
    width: 40%;
    height: 6em;
    margin: 5%;
    border: 1px solid #ddf535;
    box-sizing: border-box;
    background-color: rgba(78,78,78,0.9);
    opacity: 0;
    transform: scaleY(0.6) scaleX(0.9);
  }
  .section-enter-active, .section-leave-active, .section-enter {
    transition: all 1s ease-out;
  }
  .section-leave-to {
    transform: translateX(-100%);;
  }
  .section-enter{
    transform: translateX(100%);
  }
  .section-enter-to-class{
    transform: translateX(0%);
  }
  
</style>