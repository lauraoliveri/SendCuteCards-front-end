<script>

import Carousel from './Carousel.vue';

export default {
  data() {
    return { 
     
    }
  },
  components: {
    Carousel
  }
}
</script>

<template>
  <main>
   <Carousel/>
  </main>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

main {
  background-color: $dirtyWhite;
}
</style>
