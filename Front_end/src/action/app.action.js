import Axios from 'axios';
import { GET_CUSTOMERS, IS_LOGIN, ADD_WORKER, GET_PRODUCT } from './actionType';
import { URL } from "../common/API";

const header =   { headers: { 'Content-Type' : 'application/json; charset=utf-8', 'Accept': 'application/json'} };

export const getCustomer = () => {
    return dispatch => {
        Axios.get(URL.customerLists)
        .then(res => {
            dispatch({
              type: GET_CUSTOMERS,
              payload: res.data.output[0]
            });
          })
          .catch(err => {
              dispatch({
                type: GET_CUSTOMERS,
                payload: {"error":"Error Connection"}
              });
          });
    }
}

export const login = (e) => {
  return dispatch => {
      Axios.post(URL.login, e, header )
      .then(res => {
          dispatch({
            type: IS_LOGIN,
            payload: res.data
          });
        })
        .catch(err => {
            dispatch({
              type: IS_LOGIN,
              payload: {"error":"Error Connection"}
            });
        });
  }
}


export const registerWorker = (e) => {
  return dispatch => {
      Axios.post(URL.registerWorker, e, header )
      .then(res => {
          dispatch({
            type: ADD_WORKER,
            payload: res.data
          });
        })
        .catch(err => {
            dispatch({
              type: ADD_WORKER,
              payload: {"error":"Error Connection"}
            });
        });
  }
}


export const getproduct = () => {
  return dispatch => {
      Axios.get(URL.getproducts)
      .then(res => {
          dispatch({
            type: GET_PRODUCT,
            payload: res.data.output
          });
        })
        .catch(err => {
            dispatch({
              type: GET_CUSTOMERS,
              payload: {"error":"Error Connection"}
            });
        });
  }
}