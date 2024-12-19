<script>
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <section class="d-flex align-items-center justify-content-center">
      <div>
          <h3>
            Crea e Invia le Tue Card Personalizzate!
          </h3>
          <h6>
            Rendi ogni occasione speciale con una card unica.
          </h6>
          <button type="button" class="btn btn_custom mt-3">
            Inizia &#8594;
          </button>
      </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

section {
    height: calc(80vh - 150px);
}
.btn_custom {
  background-color: $strawberryPink;
  color: $pureWhite;

  &:hover {
    background-color: $blushPink;
  }
}

</style>
