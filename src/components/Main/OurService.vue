<script>
export default {
  data() {
    return { 

    }
  }
}
</script>

<template>
  <section>
    <div class="my_container d-flex">

        <!-- Left column with img -->
        <div class="left_col">
            <div class="img_container">
                <a href="#">
                <img src="../../assets/images/teddy_bear_PNG94.png">
                </a>
            </div>
        </div>

        <!-- Right column -->
        <div class="right_col ps-5 pt-5">
            <div>
                <!-- small title -->
                <h6 class="text-uppercase">
                    Crea la tua card perfetta
                </h6>

                <!-- Main Title -->
                <h1>
                    Rendi unico ogni momento<br>
                    con le nostre card<br>
                </h1>

                <!-- Description -->
                <p>
                    Siamo qui per aiutarti a creare card uniche e personalizzate per ogni occasione, che si tratti di compleanni, festività, o semplicemente per dire 'Ti penso'!
                </p>
            </div>

        </div>



    </div>
    <hr class="mx-5">
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

.my_container {
    width: 90%;
    margin: 0 auto;
    text-align: left;
}

section {
    height: 400px;
    background-color: $dirtyWhite;
    padding: 30px 20px;
    color: #5F4B4B;
}

.img_container {
    
    img {
        width: 300px;
    }
}

h6 {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}

</style>
