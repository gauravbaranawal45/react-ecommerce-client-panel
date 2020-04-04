const initialState = {
  todos: [],
  cartData: ''
}
export default function cartReducer(state = '', action) {
  switch (action.type) {
    case "ADD_CART":
      return { ...state, todos: action.payload };
      break;
    case "UPDTE_CART":
      return { ...state, todos: action.payload };
      break;
    case "DELETE_CART":
      return { ...state, todos: action.payload };
      break;
    case "GET_CART":
      return { ...state, cartData: action.payload };
      break;
  }
  return state;
}