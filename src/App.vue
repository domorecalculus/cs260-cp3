<template>
  <div id="app">
    <div class="header">
      <h1>Manifest</h1>
    </div>
    <div class="content">
      <side-bar />
      <router-view />
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  background-color: navy;
  color: white;
  font-style: oblique;
  height: 5vh;
  min-height: 5em;
  display: flex;
  align-content: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
  height: 95vh;
}

.footer {
  background-color: darkgray;
  height: 3em;
}

side-bar {
  min-width: 100px;
  max-width: 200px;
  width: 15%;
}
</style>
