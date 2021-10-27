
const calculateTotalPrice = (basket) => {
  return basket.reduce((acc, item) => {
    const price = item.currentPrice;
    return acc + price;
  }, 0);
}

const initialstate = {
  basket: [],
  totalPrice: 0,
};

export default function rootReducer(state=initialstate, action) {
  switch(action.type) {
    case 'ADD' : {
      const itemKey = Math.floor(Math.random() * 100000);
      const orderItem = {
        ...action.payload.orderItem,
        key: itemKey,
      };
      const basket = [...state.basket, orderItem];
      const totalPrice = calculateTotalPrice(basket);

      return {
        ...state,
        totalPrice,
        basket,
      }
    }
    case 'DELETE' : {
      const id = action.payload.itemId;
      const newState = {...state, basket: [...state.basket]};
      const index = newState.basket.findIndex((el) => el.id === id);
      newState.basket.splice(index,1);
      newState.totalPrice = calculateTotalPrice(newState.basket);

      return {
        ...newState,
      }
    }
    default: return state;
  }
}