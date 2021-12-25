<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import 'vue-select/dist/vue-select.css';

export default {
  name: 'App',
  components: {
    Navbar  
  }
}

</script>

<style src="./assets/tailwind.css"/>

