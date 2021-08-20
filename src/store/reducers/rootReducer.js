
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
    default: return state;
  }
}