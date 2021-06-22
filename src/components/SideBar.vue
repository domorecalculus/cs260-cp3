<template>
  <div>
    <h2>Inventories</h2>
    <router-link to="/create-inventory">+</router-link>
    <a
      v-for="inventory in Object.keys(this.$root.$data.store.inventories)"
      :key="inventory"
      :class="activeInventory == inventory ? 'active' : 'disabled'"
      @click="switchActiveInventory(inventory)"
    >
      {{ inventory }}
    </a>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    activeInventory: function () {
      return this.$root.$data.store.activeInventory;
    },
  },
  methods: {
    switchActiveInventory(newInventory) {
      this.$root.$data.store.activeInventory = newInventory;
      if (this.$route.path !== "/inventory") {
        this.$router.push("/inventory");
      }
    },
  },
};
</script>

<style scoped>
div {
  padding: 30px;
  background-color: lightgray;
}
.active {
  background-color: whitesmoke;
}
h2 {
  font-weight: bold;
  color: #2c3e50;
}
</style>
