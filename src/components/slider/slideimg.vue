<template>
  <div class="main-wrap">
      <div class="slider-wrap">
            <img v-for="img in gallery.arrayImgs" v-bind:src="imgUrl(img.path)" class="img-item" alt="" >
      </div> 
      <div id="arrow-wrap">
          <div id="prev" class="no-select" v-on:click="carrousel(-1)" v-bind:class="{ disable: isDisablePrev }">Prev</div>
          <div id="next" class="no-select" v-on:click="carrousel(1)" v-bind:class="{ disable: isDisableNext }">Next</div>
        </div> 
  </div>
</template>

<script type="text/babel">
  import TweenMax from 'gsap';
  export default {
    name: 'SliderImg',
    components: {
    },
    props: ['gallery'],
    data() {
      return {
        carrIndex: 0,
        maskWidth: null,
        isDisableNext: false,
        isDisablePrev: true
      };
    },
    computed: {
    },
    methods: {
      init() {
        this.$wrapper = this.$el.getElementsByClassName('slider-wrap');
        this.$wrapper[0].style.width = this.maskWidth *
            this.gallery.arrayImgs.length + 'px';
      },
      imgUrl(path) {
        // super path per npm run dev
        return require('./../../assets/sliderimg/' + path + '.jpg');
      },
      carrousel(dir) {
        this.carrIndex += dir;
        this.carrIndex = this.carrIndex >= this.gallery.arrayImgs.length
            ? this.gallery.arrayImgs.length - 1 : this.carrIndex <= 0
            ? 0 : this.carrIndex;
        return this.animateCarr(this.carrIndex);
      },
      animateCarr(index) {
        this.isDisableNext = index === this.gallery.arrayImgs.length - 1;
        this.isDisablePrev = index === 0;
        let left = index * this.maskWidth;
        TweenMax.to(this.$el.querySelector('div'), 0.5,
          {force3D: true, x: -left, ease: 'Sine.easeInOut'});
      }
    },
    watch: {
    },
    mounted() {
      this.maskWidth = parseInt(window.getComputedStyle(this.$el).width);
      this.init();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-wrap {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: 1px solid #000;
    margin: 0 auto;
  }
  .slider-wrap {
    position: absolute;
  }
  img {
    position: relative;
    float: left;
    height: 300px;
    width: 300px;
  }
  #arrow-wrap {
    position: absolute;
    width: 100%;
    height: 50px;
    top: 125px;
    z-index: 3
  }
  #arrow-wrap div {
    position: absolute;
    cursor: pointer;
    display: block;
    height: 50px;
    line-height: 50px;
    background-color: #ebebeb;
    color: orange;
    padding: 0 10px;
    border-radius: 50%;
    font-size: 16px;
    transition: all .25s ease-out;
    -webkit-transition: all .25s ease-out;
  }
  
  #arrow-wrap div#next {
    right: 0;    
  }
  #arrow-wrap div#prev {
    left: 0;
  }
  #arrow-wrap div:hover {
    opacity: .5;
  }
  #arrow-wrap div.disable {
    opacity: .5;
  }
  .no-select {
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }
</style>
