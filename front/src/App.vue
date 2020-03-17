<template>
  <div class="home">
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>
