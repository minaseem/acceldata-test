export const burgerItems = [
  {
    name: 'Cutlet',
    id: 1,
    price: 2,
    inventory: 10
  },
  {
    name: 'Bun',
    id: 2,
    price: 2,
    inventory: 10
  },
  {
    name: 'Cheese Slices',
    id: 3,
    price: 1,
    inventory: 10
  },
  {
    name: 'Salad',
    id: 4,
    price: 5,
    inventory: 10,
    fieldInfo: {
      type: 'boolean',
    }
  }
]


export const updateInventory = (id, quantityToReduce) => {
  if (typeof Number(quantityToReduce) !== 'number') return;
  const item = burgerItems.find(x => x.id === +id)
  item.inventory -= Number(quantityToReduce)
}
