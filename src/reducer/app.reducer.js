import { GET_CUSTOMERS, PRODUCT_CATEGORIES, IS_LOGIN } from '../action/actionType'

const AppState = {
  productTypes: [{name: 'Sofa', id: 1},{name: 'Table', id: 2}, {name: 'Chari', id: 3}]
}

export const appReducer = (state = AppState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      state.customerList = [...action.payload];
      return {...state};
      case IS_LOGIN:
        return {...action.payload};
    case PRODUCT_CATEGORIES:
      return {...state};
    default:
      return {...state};
  }
}