<script>
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <footer>
    <div class="container-fluid text-center">

        <!-- Logo -->
        <div class="row p-2">
            <div class="col d-flex justify-content-center align-items-center">
                <img src="../../public/greeting-card.svg" alt="logo" id="logo">
                <h3>
                    CutEcards
                </h3>
            </div>
        </div>


        <div class="row">
            <div class="col">
                <ul class="list-inline">
                    <li class="list-inline-item p-1"><a href="#">Home</a></li>
                    <li class="list-inline-item p-1"><a href="#">Privacy Policy</a></li>
                    <li class="list-inline-item p-1"><a href="#">Contattaci</a></li>
                </ul>
                <a href="https://lordicon.com/" id="icons">Animated icons by Lordicon.com</a>
                <p>© CutECards. Tutti i diritti riservati.</p>
            </div>
        </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


footer {
    height: 210px;
    background-color: $blushPink;
    padding: 30px 20px;
    color: $mainBrown;

    h3 {
        color: black;
    }

    p {
        font-size: small;
    }
}

a {
    text-decoration: none;
    color: black;

    &:hover {
        color: $cherryPink;
    }
}

#icons {
    font-size: 10px;
    color: $mainBrown;
}

#logo {
  width: 50px;
}

</style>
