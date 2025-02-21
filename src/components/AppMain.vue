<script>


import Carousel from './Carousel.vue';
import HowTo from './HowTo.vue';
import OurService from './OurService.vue';


export default {
  data() {
    return { 
     
    }
  },
  components: {
    Carousel,
    OurService,
    HowTo
  }
}
</script>

<template>
  <div>
    <Carousel />
    <OurService />
    <HowTo/>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


</style>
