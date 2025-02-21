<script>

import { store } from '../../store';
export default {
  data() {
    return { 

    }
  }
}
</script>

<template>
  <section>
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-12 pt-5">

          <!-- Small title -->
          <h6 class="text-uppercase">
            Come creare la tua card?
          </h6>

          <!-- Main Title -->
          <h1>
            La Tua Card in 3 Semplici Passaggi
          </h1>
        </div>
      </div>

      <!-- Description -->
      <div class="row text-uppercase pt-2">
        <div class="col p-3">
          <h6>
            Personalizza
          </h6>

          <!-- Icon -->
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/nwfpiryp.json"
              trigger="hover"
              state="hover-line"
              style="width:150px;height:150px">
            </lord-icon>
          </div>
        </div>
      
        <div class="col p-3">
          <h6>
            Invia
          </h6>

          <!-- Icon -->
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/ddgirohb.json"
              trigger="in"
              delay="1000"
              state="in-reveal"
              colors="primary:#ebe6ef,secondary:#d1f3fa,tertiary:#3a3347"
              style="width:150px;height:150px">
            </lord-icon>
          </div>
        </div> 


        <div class="col p-3">
          <h6>
            Sorprendi
          </h6>

          <!-- Icon -->
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/dqhmanhc.json"
              trigger="morph"
              state="morph-glitter"
              colors="primary:#e8a8b7,secondary:#ebe6ef,tertiary:#ffc738,quaternary:#f9c9c0,quinary:#f24c00"
              style="width:150px;height:150px">
            </lord-icon>
          </div>

        </div>       
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;


section {
  height: 470px;
  background-color: $dirtyWhite;
  padding: 20px 20px;
  color: #5F4B4B;
}

h6 {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
</style>
