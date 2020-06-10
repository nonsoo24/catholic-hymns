<template>
  <div class="home">
      <Nav class="mb-6" />
      <SideNavBar />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <input type="text" placeholder="Search">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Nav from '@/components/Nav.vue';
import SideNavBar from '@/components/SideNavBar.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    SideNavBar
  },
};
</script>
