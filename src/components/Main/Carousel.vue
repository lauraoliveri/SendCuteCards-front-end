<script>

import { store } from '../../../store';
export default {
  data() {
    return { 
     store,
     currentIndex: 0
    }
  }
}
</script>

<template>
  <section>

    <!-- Carousel with text and button on top-->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            
            <div class="carousel-item" v-for="(card,i) in store.CardImages" key="i" :class=" currentIndex === 0 ? 'active' :''"  data-bs-interval="3000">
                <img :src="card.image" class="d-block w-100" :alt="card.name">
            </div>
            <div class="carousel_text">
                <h3>
                    Crea e Invia le Tue ECard Personalizzate!
                </h3>
                <h6>
                    Rendi ogni occasione speciale con una card unica.
                </h6>
                <button type="button" class="btn btn_custom mt-3">
                    Inizia &#8594;
                </button>
            </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

section {
    height: calc(80vh - 150px);
}

img  {
    height: 500px;
}
.btn_custom {
  background-color: $blushPink;
  color: $blushPink;

  &:hover {
    background-color: $lightGrey;
  }
}

.carousel-item {
    position: relative;
}

.carousel_text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
