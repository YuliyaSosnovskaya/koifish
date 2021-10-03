
const initialstate = {
  basket: []
};

export default function rootReducer(state=initialstate, action) {
  switch(action.type) {
    case 'ADD' : {
      return {
        ...state , basket:[...state.basket, action.payload.orderItem]
      }
    }
    case 'DELETE' : {
      let id = action.payload.itemId;
      let newState = {...state, basket: [...state.basket]};
      let index = newState.basket.findIndex((el) => el.id === id);
      newState.basket.splice(index,1);
      return {
        ...newState,
      }
    }
    default: return state;
  }
}