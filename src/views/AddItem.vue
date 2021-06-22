<template>
  <div>
    <div class="modal-header">
      <router-link to="../">X</router-link>
    </div>
    <p>Name:</p>
    <input v-model="name" />
    <p>Quantity:</p>
    <input v-model="qty" type="number" />
    <button @click="saveItem">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddItem",
  data() {
    return {
      name: "",
      qty: 0,
    };
  },
  computed: {
    inventory: function () {
      return this.$root.$data.store.inventories[
        this.$root.$data.store.activeInventory
      ];
    },
  },
  methods: {
    saveItem() {
      console.log(this.inventory.map((x) => x.id));
      let item = {
        name: this.name,
        qty: this.qty,
        id:
          this.inventory.length > 0
            ? Math.max(...this.inventory.map((x) => x.id)) + 1
            : 1,
      };
      console.log(item.id);
      this.inventory.push(item);
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>
