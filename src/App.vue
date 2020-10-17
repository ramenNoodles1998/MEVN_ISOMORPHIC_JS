<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <div id="app-container">
      <router-view/>
    </div>
      <Footer />
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'

  export default {
    app: 'vue',

    components: {
      NavBar,
      Footer
    }
  }
</script>