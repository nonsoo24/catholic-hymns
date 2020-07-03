<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {

    handleConnectionChange (event) {
      var wentOffline, wentOnline
      if (event.type == "offline") {
        console.log("You lost connection.");
        wentOffline = new Date(event.timeStamp);
      }
      if (event.type == "online") {
        console.log("You are now back online.");
        wentOnline = new Date(event.timeStamp);
        console.log("You were offline for " + (wentOnline - wentOffline) / 1000 + "seconds.");
      }
    },
    // window.addEventListener('online', handleConnectionChange)
    // window.addEventListener('offline', handleConnectionChange)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
} */

html,
body {
  max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* #nav a.router-link-exact-active {
  color: #fff !important;
} */

.router-link-exact-active {
    color: #fff !important;
}

/* .is-open {
  width: 220px !important;
} */
</style>
