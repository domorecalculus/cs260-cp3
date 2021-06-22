<template>
  <div>
    <div class="modal-header">
      <button @click="deleteItem">Delete</button>
      <button @click="editItem">Edit</button>
      <router-link to="../">X</router-link>
    </div>
    <div v-if="isEditing">
      <input v-model="newName" />
      <input v-model="newQty" type="number" />
      <button @click="saveItem">Save</button>
    </div>
    <div v-else>
      <p>{{ item.name }}</p>
      <p>{{ item.qty }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      item: this.$root.$data.store.inventories[
        this.$root.$data.store.activeInventory
      ].find((x) => x.id == this.$route.params.itemId),
      newName: "",
      newQty: 0,
    };
  },
  computed: {
    inventory: function () {
      return this.$root.$data.store.inventories[
        this.$root.$data.store.activeInventory
      ];
    },
  },
  created() {
    this.newName = this.item.name;
    this.newQty = this.item.qty;
  },
  methods: {
    deleteItem() {
      this.inventory.splice(
        this.inventory.findIndex((x) => x.id == this.item.id),
        1
      );
      this.$router.go(-1);
    },
    editItem() {
      this.isEditing = true;
    },
    saveItem() {
      this.item.name = this.newName;
      this.item.qty = this.newQty;
      this.isEditing = false;
    },
  },
};
</script>

<style>
</style>
