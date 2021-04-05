const {
  PRODUCT_LIST_REQUEST, 
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL } = require('../constants/productConstants');

const initialState = {
  loading: false,
  products: []
}

export const productListReducer = (
    state = initialState, 
    action) => {
      switch(action.type){
        case PRODUCT_LIST_REQUEST: 
          console.log("in request");
          return { loading: true };
        case PRODUCT_LIST_SUCCESS:
          console.log("in PAYLOAD:: ", action.payload.data);
          return { loading: false, products: action.payload.data};
        case PRODUCT_LIST_FAIL:
          console.log("in error");
          return { loading: false, error: action.payload }
        default:
          console.log("in default");
          return state
      }
    }

