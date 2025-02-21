<script>
export default {
  data() {
    return { 
      cards: []
    }
  },
  methods: {
    async getCards() {
      try {
        let response = await fetch("ecards.json");
        this.cards = await response.json(); 
        // console.log(data);
      } catch (error) {
        console.error("Couldn't get Cards");
      }

    }
  },
  mounted() {
    this.getCards();
  }
};
</script>

<template>
  <div>
    <div class="pt-4">
      <h2>
        Cards
      </h2>
      <hr>
    </div>

    <!-- Cards -->
     <div class="d-flex flex-wrap justify-content-center">
      <div class="card my-2 mx-2" style="width: 15rem;"  v-for="(card, index) in cards">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">{{ card.message }}</p>
        </div>
        <div class="category_tag">
          {{ card.category }}
        </div>
      </div>
     </div>
    
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.card {
  position: relative;
}

.category_tag {
  width: 120px;
  font-size: smaller;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  background-color: $cherryPink;
  color: $mainBrown;
  position: absolute;
  right: 0;
  top: 0;
}

</style>
