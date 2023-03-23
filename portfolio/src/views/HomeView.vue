<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <header id="header">
    <v-container class="d-flex flex-column align-center">
      <span>‘’</span>
      <h1>If you don’t take risks, you can’t create a future.</h1>
      <a href="#menu" class="material-symbols-outlined icon-size"> expand_more </a>
    </v-container>
  </header>
  <NavBar />
  <header id="section1" class="bg-black">
    <v-container class="d-flex flex-column align-center">
      <span>''</span>
      <h1>If you don't take risks, you can't create a future.</h1>
      <a href="#header" class="material-symbols-outlined icon-size"> expand_more </a>
    </v-container>
  </header>
</template>

<style scopped>
header {
  position: relative;
  height: 100vh;
}

header h1 {
  margin-top: 220px;
}

header span {
  position: absolute;
  font-family: 'Bigilla', sans-serif;
  font-size: 328px;
  color: #fff;
}

header .icon-size {
  font-size: 100px;
  color: #fff;
  position: relative;
  animation-name: sinalize;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

header a {
  text-decoration: none;
}

@keyframes sinalize {
  0% {top:0px;}
  50% {top:10px;}
  100% {top:0px;}
}

header .icon-size {

}

h1 {
  text-transform: uppercase;
  font-family: 'Bigilla', sans-serif;
  font-size: 120px;
  max-width: 1000px;
  text-align: center;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 500,
  'GRAD' 0,
  'opsz' 1
}
</style>

<script>
</script>
