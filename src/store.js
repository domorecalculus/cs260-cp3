let store = {
  activeInventory: "primary",
  inventories: {
    primary: [
      { id: 1, name: "pizza", qty: 2 },
      { id: 2, name: "calculator", qty: 3 },
    ],
    secondary: [
      { id: 1, name: "apples", qty: 4 },
      { id: 2, name: "oranges", qty: 5 },
    ],
  },
};

export default { store };
