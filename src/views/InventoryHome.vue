<template>
  <div class="content-container">
    <div class="toolbar">
      <input type="text" v-model="searchText" />
      <router-link to="/inventory/add" tag="button">Add Item</router-link>
    </div>
    <div class="inventory-items">
      <item-list :items="searchedItems" />
      <div v-if="showModal" class="modal-route">
        <div class="modal-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";

export default {
  name: "InventoryHome",
  data() {
    return {
      showModal: false,
      searchText: "",
    };
  },
  computed: {
    searchedItems() {
      return this.searchText === ""
        ? this.$root.$data.store.inventories[
            this.$root.$data.store.activeInventory
          ]
        : this.$root.$data.store.inventories[
            this.$root.$data.store.activeInventory
          ].filter((x) => x.name.includes(this.searchText));
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (newVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;
      },
    },
  },
  components: {
    ItemList,
  },
  methods: {
    ItemList,
  },
};
</script>

<style scoped>
.content-container {
  display: block;
  width: 100%;
  height: 100%;
}

.inventory-items {
  display: flex;
  flex-direction: row;
}

.modal-route {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
}
</style>
