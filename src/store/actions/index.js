export const addToBasket = (orderItem) => ({
  type:'ADD',
  payload: {orderItem}
});

export const deleteFromBasket = (itemId) =>({
  type:'DELETE',
  payload: {itemId}
});