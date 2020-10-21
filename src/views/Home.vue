<template>
  <div id="custom-home">
      <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  beforeCreate() {
    fetch(this.$store.state.apiUrl + '/api/user')
    .then(res => console.log(res))
  }
}
</script>
