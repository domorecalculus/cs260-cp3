<template>
  <div>
    <p>Title</p>
    <input type="text" v-model="title" />
    <p v-if="title in this.$root.$data.store.inventories">
      Name must be unique from your other inventories
    </p>
    <p>Description</p>
    <input type="text" v-model="description" />
    <item-list :items="items" />
    <button
      @click="createInventory"
      :disabled="title in this.$root.$data.store.inventories"
    >
      Create
    </button>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";
export default {
  data() {
    return {
      title: "",
      description: "",
      items: [],
    };
  },
  components: { ItemList },
  methods: {
    createInventory() {
      this.$root.$data.store.inventories[this.title] = this.items;
      this.$root.$data.store.activeInventory = this.title;
      this.$router.push("/inventory");
    },
  },
};
</script>

<style scoped>
</style>
