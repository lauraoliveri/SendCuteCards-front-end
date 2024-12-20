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

                <!-- Socials -->
                <div>
                    <!-- Github -->
                    <span class="p-3">
                        <a href="https://github.com/lauraoliveri">
                            <i class="fa-brands fa-github fa-bounce fa-2xl" style="color: #5F4B4B;"></i>
                        </a>
                    </span>

                    <!-- Linkedin -->
                    <span class="p-3">
                        <a href="https://www.linkedin.com/in/laura-salvatrice-oliveri-48a5b7216/">
                            <i class="fa-brands fa-linkedin fa-bounce fa-2xl" style="color: #5F4B4B;"></i>
                        </a>
                    </span>
                </div>
                <div class="pt-1">
                    <a href="https://lordicon.com/" class="icons_copyrights">Animated icons by Lordicon.com</a>
                    <p class="icons_copyrights">Icons by <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>.</p>
                    <p>© CutECards. Tutti i diritti riservati.</p>
                </div>
            </div>
        </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;


footer {
    height: 270px;
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

.icons_copyrights {
    font-size: 10px;
    color: $mainBrown;
}

#logo {
  width: 50px;
}

</style>
