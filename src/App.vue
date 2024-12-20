<script>
/* 
  Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
  1) Importazione del componente
  2) Dichiarazione del componente
  3) Utilizzo del componente
*/
// 1) Importazione del componente
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';
import HowTo from './components/Main/HowTo.vue';
import OurService from './components/Main/OurService.vue';


export default {
  data() {
    return { 
      
    }
  },
  // 2) Dichiarazione del componente
  components: {
    AppHeader,
    AppMain,
    OurService,
    HowTo,
    AppFooter
  },
  methods: {
    
  }
}
</script>

<template>
  <div id="big_container" class="">
    <!-- 3) Utilizzo del componente -->
    <AppHeader />
    <AppMain />
    <OurService/>
    <HowTo/>
    <AppFooter/>
  </div>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";

#big_container {
  padding-left: 200px;
  padding-right: 200px;
  background: rgb(245,245,245);
  background: linear-gradient(180deg, rgba(245,245,245,1) 31%, rgba(250,212,216,1) 100%); 
  background-size: contain;
}

</style>
