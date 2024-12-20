<script>
export default {
  data() {
    return { 
     
    }
  }
}
</script>

<template>
  <header>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <span>
          <img src="../../public/greeting-card.svg" id="logo">
        </span>
        <a class="navbar-brand" href="#">CutEcards</a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Cards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Natale</a>
            </li>

            <!-- Dropdown menu with card categories -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorie
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Compleanno</a></li>
                <li><a class="dropdown-item" href="#">Pasqua</a></li>
                <li><a class="dropdown-item" href="#">San Valentino</a></li>
                <li><a class="dropdown-item" href="#">Matrimonio</a></li>
                <li><a class="dropdown-item" href="#">Ringraziamento</a></li>
                <li><a class="dropdown-item" href="#">Auguri</a></li>
                <li><a class="dropdown-item" href="#">Congratulazioni</a></li>
                <li><a class="dropdown-item" href="#">Nascita</a></li>
                <li><a class="dropdown-item" href="#">Festa della mamma</a></li>
                <li><a class="dropdown-item" href="#">Festa del papà</a></li>
                <li><a class="dropdown-item" href="#">Amicizia</a></li>
                <li><a class="dropdown-item" href="#">Capodanno</a></li>
                <li><a class="dropdown-item" href="#">Laurea</a></li>
                <li><a class="dropdown-item" href="#">Buona Fortuna</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Altro</a></li>
              </ul>
            </li>
          </ul>

          <!-- Search bar -->
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn_custom" type="submit">Cerca</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

#logo {
  width: 50px;
}
// Search button 
.btn_custom {
  border-color: $blushPink;
  color: $blushPink;

  &:hover {
    background-color: $cherryPink;
  }
}
</style>
