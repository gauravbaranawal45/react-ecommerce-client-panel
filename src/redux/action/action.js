import axios from "axios";
const token = JSON.parse(localStorage.getItem('_token'))
const api = async (api, id) => {
  let data = await axios.post(`http://localhost:8000/data/${api}`, { id }, { headers: { "authorization": `Bearer ${token.token}` } })
  return data.data
}

export const getCart = (id) => {
  if (localStorage.getItem("_token") === null) {
    var cartState = JSON.parse(localStorage.getItem('cart'));
    return async (dispatch) => {
      dispatch({ type: 'GET_CART', payload: cartState })
    }
  } else {
    return async (dispatch) => {
      var cartState = await api("getCart", "")
      dispatch({ type: 'GET_CART', payload: cartState })
    }
  }
}


export const storeCart = (cart) => {
  if (localStorage.getItem('cart') == null) {
    var cartData = {};
  }
  else {
    cartData = JSON.parse(localStorage.getItem('cart'));
  }
  if (cartData[cart.pid] != undefined) {
    cartData[cart.pid] = { pid: cart.pid, qty: cartData[cart.pid].qty + 1 };
  } else {
    cartData[cart.pid] = { pid: cart.pid, qty: 1 };
  }
  if (localStorage.getItem("_token") === null) {
    localStorage.setItem('cart', JSON.stringify(cartData));
  } else {
    api('addCart', cartData)
  }
  return (dispatch) => {
    dispatch({ type: 'ADD_CART', payload: cartData })
  }
}


export const updateQty = (data) => {
  if(token===null){
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart[data.id] = { pid: cart[data.id].pid, qty: data.e.target.value };
    localStorage.setItem('cart', JSON.stringify(cart));
  }else{
    let val = {id:data.id,value:data.e.target.value}
    api('updateCart', val);
  }
  return (dispatch) => {
    dispatch({ type: 'UPDTE_CART', payload: '' })
  }
}

export const removeCart = (id) => {
  if(token===null){
    let cart = JSON.parse(localStorage.getItem('cart'))
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
  }else{
    api('removeCart', id);
  }
  return (dispatch) => {
    dispatch({ type: 'DELETE_CART', payload: '' })
  }
}