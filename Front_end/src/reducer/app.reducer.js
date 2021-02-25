import { GET_CUSTOMERS, PRODUCT_CATEGORIES, IS_LOGIN, GET_PRODUCT } from '../action/actionType'

const AppState = {
 
}


export const appReducer = (state = AppState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      state.customerList = [{...action.payload}];
      return {...state};
      case GET_PRODUCT:
        state.allProducts = action.payload;
      return {...state};
      case IS_LOGIN:
        state.userDetails = {...action.payload};
        return {...state};
    case PRODUCT_CATEGORIES:
      return {...state};
    default:
      return {...state};
  }
}